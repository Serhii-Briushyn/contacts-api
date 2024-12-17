import { THIRTY_DAYS } from "../constants/index.js";
import {
  loginOrSignupWithGoogle,
  loginUserService,
  logoutUserService,
  refreshUsersSessionService,
  registerUserService,
  resetPasswordService,
  sendResetPasswordEmailService,
} from "../services/auth.js";
import { generateAuthUrl } from "../utils/googleOAuth2.js";

const setupSession = (res, session) => {
  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + THIRTY_DAYS),
  });
};

//--------------------registerUserController--------------------

export const registerUserController = async (req, res) => {
  const user = await registerUserService(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully registered a user!",
    data: user,
  });
};

//--------------------loginUserController--------------------

export const loginUserController = async (req, res) => {
  const session = await loginUserService(req.body);

  setupSession(res, session);

  res.json({
    status: 200,
    message: "Successfully logged in an user!",
    data: {
      accessToken: session.accessToken,
    },
  });
};

//--------------------refreshUserSessionController--------------------

export const refreshUserSessionController = async (req, res) => {
  const session = await refreshUsersSessionService({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });

  setupSession(res, session);

  res.json({
    status: 200,
    message: "Successfully refreshed a session!",
    data: {
      accessToken: session.accessToken,
    },
  });
};

//--------------------logoutUserController--------------------

export const logoutUserController = async (req, res) => {
  await logoutUserService(req.cookies.sessionId);

  res.clearCookie("sessionId");
  res.clearCookie("refreshToken");

  res.status(204).send();
};

//--------------------sendResetPasswordEmailController--------------------

export const sendResetPasswordEmailController = async (req, res) => {
  await sendResetPasswordEmailService(req.body.email);

  res.json({
    message: "Reset password email was successfully sent!",
    status: 200,
    data: {},
  });
};

//--------------------resetPasswordController--------------------

export const resetPasswordController = async (req, res) => {
  await resetPasswordService(req.body);

  res.json({
    message: "Password was successfully reset!",
    status: 200,
    data: {},
  });
};

//--------------------getGoogleOAuthUrlController--------------------

export const getGoogleOAuthUrlController = async (req, res) => {
  const url = generateAuthUrl();

  res.json({
    status: 200,
    message: "Successfully get Google OAuth url!",
    data: {
      url,
    },
  });
};

//--------------------loginWithGoogleController--------------------

export const loginWithGoogleController = async (req, res) => {
  const session = await loginOrSignupWithGoogle(req.body.code);
  setupSession(res, session);

  res.json({
    status: 200,
    message: "Successfully logged in via Google OAuth!",
    data: {
      accessToken: session.accessToken,
    },
  });
};

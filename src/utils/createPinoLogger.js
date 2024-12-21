import pino from "pino-http";
import { env } from "./env.js";

export const createPinoLogger = () => {
  const isDevelopment = env("NODE_ENV") === "development";
  return pino(
    isDevelopment
      ? {
          transport: {
            target: "pino-pretty",
            options: {
              colorize: true,
            },
          },
        }
      : {},
  );
};

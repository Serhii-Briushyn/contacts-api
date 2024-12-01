import createHttpError from 'http-errors';
import { ContactsCollection } from '../db/models/contacts.js';

export const checkOwnership = async (req, res, next) => {
  const { user } = req;
  const { contactId } = req.params;

  if (!user) {
    next(createHttpError(401, 'Unauthorized'));
    return;
  }

  const contact = await ContactsCollection.findOne({
    _id: contactId,
    userId: user._id,
  });

  if (!contact) {
    next(createHttpError(403, 'Access denied or contact not found'));
    return;
  }

  next();
};

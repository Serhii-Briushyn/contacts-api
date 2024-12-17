import { SORT_ORDER } from "../constants/index.js";
import { ContactsCollection } from "../db/models/contacts.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

//--------------------getAllContactsService--------------------

export const getAllContactsService = async ({
  userId,
  page,
  perPage,
  sortOrder = SORT_ORDER.ASC,
  sortBy = "_id",
  filter = {},
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const contactsQuery = ContactsCollection.find({ userId });

  if (filter.type) {
    contactsQuery.where("contactType").equals(filter.type);
  }

  if (filter.isFavorite !== null && filter.isFavorite !== undefined) {
    contactsQuery.where("isFavorite").equals(filter.isFavorite);
  }

  const [contactsCount, contacts] = await Promise.all([
    contactsQuery.clone().countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

//--------------------getContactByIdService--------------------

export const getContactByIdService = async (contactId, userId) => {
  const contact = await ContactsCollection.findOne({ _id: contactId, userId });
  return contact;
};

//--------------------createContactService--------------------

export const createContactService = async (userId, newContactData) => {
  const newContact = await ContactsCollection.create({
    ...newContactData,
    userId,
  });
  return newContact;
};

//--------------------updateContactService--------------------

export const updateContactService = async (contactId, userId, contactData) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    contactData,
    { new: true },
  );

  return updatedContact;
};

//--------------------deleteContactService--------------------

export const deleteContactService = async (contactId, userId) => {
  const deletedContact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return deletedContact;
};

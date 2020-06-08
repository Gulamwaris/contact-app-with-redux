import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS } from "./Types";

export const createContact = (contact) => {
  return {
    type: CREATE_NEW_CONTACT,
    payload: contact,
  };
};

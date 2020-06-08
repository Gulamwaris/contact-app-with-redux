import { CREATE_NEW_CONTACT, GET_ALL_CONTACTS } from "../actions/Types";

const initialState = {
  contact: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CONTACT:
      return {
        ...state,
        contact: [
          ...state.contact,
          {
            name: action.payload,
          },
        ],
      };

    default:
      return state;
  }
};

import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@mail.com',
        phone: '222-333-4444',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Mia Doe',
        email: 'mia@mail.com',
        phone: '222-555-6666',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Melanie Bel',
        email: 'mb@mail.com',
        phone: '222-777-8888',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // SET THE ACTIONS
  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

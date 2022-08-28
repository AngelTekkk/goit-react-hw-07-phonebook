import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contact/addContact', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const removeContact = createAction('contact/removeContact');
const filter = createAction('contact/filter');

const contactActions = { addContact, removeContact, filter };
export default contactActions;

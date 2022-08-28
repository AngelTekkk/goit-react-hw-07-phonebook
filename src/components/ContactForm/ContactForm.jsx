import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from 'redux/contacts/contactActions';
import { Notify } from 'notiflix';
import s from './ContactForm.module.css';
import { getContacts } from 'redux/contacts/contactSelectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onAddContact = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        throw new Error('This input is not hadling');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isNameAlreadyAdded = contacts.find(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberAlreadyAdded = contacts.find(c => c.number === number);
    if (isNameAlreadyAdded || isNumberAlreadyAdded) {
      isNameAlreadyAdded && Notify.failure(`${name} is already in contacts.`);
      isNumberAlreadyAdded &&
        Notify.failure(
          `${number} is already in contacts as ${isNumberAlreadyAdded.name}.`
        );
    } else {
      Notify.success(`${name} is added to contacts.`);
      onAddContact(name, number);
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

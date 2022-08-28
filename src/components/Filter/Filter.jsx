import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contactSelectors';
import contactsActions from 'redux/contacts/contactActions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <input
        className={s.input}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={e => dispatch(contactsActions.filter(e.target.value))}
      />
    </label>
  );
}

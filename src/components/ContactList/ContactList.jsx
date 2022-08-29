import React from 'react';
import { useDeleteContactMutation } from '../../redux';
import { Notify } from 'notiflix';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ visibleContacts }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => {
          return <ContactListItem key={id} contact={{ id, name, phone }} />;
        })}
    </ul>
  );
}

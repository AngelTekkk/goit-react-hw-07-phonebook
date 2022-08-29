import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList({ visibleContacts }) {
  return (
    <ul className={s.list}>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => {
          return <ContactListItem key={id} contact={{ id, name, phone }} />;
        })}
    </ul>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

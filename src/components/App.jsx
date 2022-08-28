import React from 'react';

import { Filter, ContactList, Section, ContactForm } from './index';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}


import { useState, useEffect } from "react";

import { nanoid } from "nanoid";
import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactForm from "../PhoneBook/ContactForm/ContactForm";
import ContactList from "../PhoneBook/ContactList/ContactList";
import Filter from "../PhoneBook/Filter/Filter";
import Notification from "../PhoneBook/Notification/Notification";

import {
  Container,
  MainTitle,
  SecondaryTitle,
  Titleparth,
} from "./App.styled";

export default function App() {
  const [contacts, setContacts] = useState(() => { 
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState(''); 

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact (name, number) {
    const contact = {
      name,
      number,
    }

   if (contacts.find(prevContact => prevContact.name.toLowerCase() === contact.name.toLowerCase())) {
      Report.info(
        "Enter a unique name!",
        `This contact's name ${contact.name} already exists.`,
        "OK"
      )
      return;
    }

    setContacts(prevContacts => [...prevContacts, {id: nanoid(), ...contact}]);
  }

  const deleteContact = (id) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id)
    })    
  }
  
  function changeFilter (event) {
    setFilter(event.currentTarget.value.trim());
  }

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const findContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return findContacts;
  }

  const visibleContacts = getVisibleContacts(); 

  return (
    <Container>
       <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
       <ContactForm submit={addContact} />
      <SecondaryTitle>Contacts</SecondaryTitle>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
          {visibleContacts.length === 0 ? (
            <Notification message={`Contact's name ${filter} not found.`}/>):
              (<ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />)}
          </>
          ) :
          (<Notification message="There is no contacts"/>)
        }     
      </Container>
  )
}

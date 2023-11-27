
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
    console.log("useEffect")
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
            <Notification message={`No contacts found with name ${filter}.`}/>):
              (<ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />)}
          </>
          ) :
          (<Notification message="There is no contacts"/>)
        }     
      </Container>
  )

}


// class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   componentDidMount() {
//     const contactsData = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contactsData);
   
//     if (parsedContacts) {
//        this.setState({
//       contacts: parsedContacts,
//     })
//     }   
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id)
//     }))
//   }

//   addContact = ({name, number}) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     }
  
//     if (this.state.contacts.find(prevContact => prevContact.name.toLowerCase() === contact.name.toLowerCase())) {
//       Report.info(
//         "Enter a unique name!",
//         `This contact's name ${contact.name} already exists.`,
//         "OK"
//       )
//       return;
//     }
    
//     return this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts]
//     }))
//   }

//   changeFilter = event => {
//     this.setState({filter: event.currentTarget.value})
//   }

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLocaleLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//   }

//   render() {
//     const {contacts, filter } = this.state; 
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
//         <ContactForm submit={this.addContact} />
//         <SecondaryTitle>Contacts</SecondaryTitle>
//         {contacts.length > 0 ? (
//           <>
//             <Filter value={filter} onChange={this.changeFilter} />
//             <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
//           </>
//           ) :
//           (<Notification message="There is no contacts"/>)
//         }     
//       </Container>
//     );
// }
// }

// export default App;


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

  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  // }

  // const visibleContacts = getVisibleContacts()
  const changeFilter = () => {

  }

  const deleteContact = (id) => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id)
    })    
  }
  
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

  return (
    <Container>
       <MainTitle>Phone<Titleparth>Book</Titleparth></MainTitle>
       <ContactForm submit={addContact} />
      <SecondaryTitle>Contacts</SecondaryTitle>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList contacts={contacts} onDeleteContact={deleteContact}/>
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

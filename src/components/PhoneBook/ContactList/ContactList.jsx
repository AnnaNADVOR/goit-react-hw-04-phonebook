import ContactItem from "../ContactItem/ContactItem";
import {List} from "./ContactList.styled"


function ContactList({ contacts, onDeleteContact}) {
    return (
        <List>
                 {contacts.map(({ id, name, number }) =>
                <ContactItem
                    onDeleteContact={onDeleteContact}
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
                 )}
            </List>   
              
    )
}

export default ContactList; 
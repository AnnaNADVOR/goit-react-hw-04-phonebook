import { BsFillTrash3Fill } from "react-icons/bs";

import {Contact, Name, Number, RemoveButton }  from "./ContactItem.styled"

function ContactItem({ id, name, number, onDeleteContact}) {
    return (
        <Contact  key={id}>
            <Name>{name}:<Number>{number}</Number>
            </Name>
            <RemoveButton onClick={()=> onDeleteContact(id)} type="button">
                <BsFillTrash3Fill />                
            </RemoveButton>
        </Contact >
    )
}

export default ContactItem;
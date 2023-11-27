
import {useState} from "react";

import { BsFillPersonFill, BsFillPersonPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import {
    Form,
    FormField,
    Label,
    Input,
    InputSection,
    SubmitButton
} from "./ContactForm.styled";


export default function ContactForm({submit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const changeInput = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault(); 
        submit(name, number);
        setName('');
        setNumber('');
    }

  return (
            <Form onSubmit={handleSubmitForm}> 
                <FormField>
                    <Label>Name</Label>
                    <InputSection>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={changeInput}
                            placeholder="Name Surname"
                            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces."
                            required
                        />
                        <BsFillPersonFill />
                    </InputSection>                    
                </FormField>
                <FormField>
                    <Label>Number </Label>
                    <InputSection>
                        <Input
                            type="tel"
                            name="number"
                            value={number}
                            onChange={changeInput}
                            placeholder="+хх (xxx) xxx-xx-xx"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <BsFillTelephoneFill />
                    </InputSection>                    
                </FormField>                               
                <SubmitButton type="submit">Add contact
                    <BsFillPersonPlusFill />
                </SubmitButton>
            </Form>        
        )


}



// class ContactForm extends Component {
    // state = {
    //     name: "",
    //     number: "",
    // }
    
    // changeInput = (event) => {
    //     const { name, value } = event.currentTarget;
    //     this.setState({ [name]: value })        
    // }

    // resetForm = () => {
    //     this.setState ({
    //         name: "",
    //         number: "",
    //     })            
    // }

    // handleSubmitForm = event => {
    //     event.preventDefault()
    //     this.props.submit(this.state);
    //     this.resetForm();
    // }

    // render() {
    //     const { name, number } = this.state; 
        
    //     return (
    //         <Form onSubmit={this.handleSubmitForm}> 
    //             <FormField>
    //                 <Label>Name</Label>
    //                 <InputSection>
    //                     <Input
    //                         type="text"
    //                         name="name"
    //                         value={name}
    //                         onChange={this.changeInput}
    //                         placeholder="Name Surname"
    //                         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //                         title="Name may contain only letters, apostrophe, dash and spaces."
    //                         required
    //                     />
    //                     <BsFillPersonFill />
    //                 </InputSection>                    
    //             </FormField>
    //             <FormField>
    //                 <Label>Number </Label>
    //                 <InputSection>
    //                     <Input
    //                         type="tel"
    //                         name="number"
    //                         value={number}
    //                         onChange={this.changeInput}
    //                         placeholder="+хх (xxx) xxx-xx-xx"
    //                         pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    //                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //                         required
    //                     />
    //                     <BsFillTelephoneFill />
    //                 </InputSection>                    
    //             </FormField>                               
    //             <SubmitButton type="submit">Add contact
    //                 <BsFillPersonPlusFill />
    //             </SubmitButton>
    //         </Form>        
    //     )
    // }
// }

// export default ContactForm; 

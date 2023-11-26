import { BsSearch } from "react-icons/bs";
import { Section} from "./Filter.styled";
import {FormField, Label, Input, InputSection  } from "../ContactForm/ContactForm.styled"

function ContactSearch({filter, onChange}) { 
    return (
        <Section>
            <FormField>
            <Label>Find contacts by name</Label>
            <InputSection>
                <Input  type="text" name="name" value={filter} onChange={onChange} />   
                <BsSearch/>   
            </InputSection>               
        </FormField>
        </Section>

    )
}

export default ContactSearch; 
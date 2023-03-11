import PropTypes from 'prop-types';
import { useState } from 'react';
import {FormAdd, Input, Btn} from './PhoneForm.style'



export const PhoneForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
    
      const handleChange = ({ target }) => {
        switch (target.name) {
          case 'name':
            setName(target.value);
            break;

            case 'number':
              setNumber(target.value);
            break;

            default: return;
        }
        
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number}); 
        setName('')
        setNumber('')
      };
    
    
        return (
           
<FormAdd  onSubmit={handleSubmit}>
    <label htmlFor="Name"> Name : </label>
        
    <Input
   type="text"
   name="name"
   placeholder="Ivanov Ivan"
   onChange={handleChange}
   value={name}
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
/>

    <label htmlFor="Number"> Number : </label>
        
    <Input
  type="tel"
  name="number"
  placeholder="067 777 77 77"
  onChange={handleChange}
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  
/>

  
    <Btn type="submit">Add contact</Btn>
</FormAdd>

        )
    }
  

PhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
import PropTypes from 'prop-types';
import {List, Item, Text, Btn } from './PhoneList.style';

export const PhoneList = ({contacts, removeContact}) => {
    const elements = contacts.map(contact => (
        <Item key={contact.id}>
                <Text>{contact.name}</Text>
                <Text>{contact.number}</Text>
                <Btn type='button' onClick={() => removeContact(contact.id)}>Delete</Btn>
            </Item>
      ));
      return <List>{elements}</List>;
    };
        
    

PhoneList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    removeContact: PropTypes.func.isRequired,
  };

  PhoneList.defaultProps = {
    contacts: [],
  };
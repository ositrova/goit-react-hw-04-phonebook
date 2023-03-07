import PropTypes from 'prop-types';
import {List, Item, Text, Btn } from './PhoneList.style';

export const PhoneList = ({contacts, removeContact}) => {
    const elements = contacts.map(({ id, name, number }) => (
        <Item key={id}>
                <Text>{name}</Text>
                <Text>{number}</Text>
                <Btn type='button' onClick={() => removeContact(id)}>Delete</Btn>
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
    ).isRequired,
    removeContact: PropTypes.func.isRequired,
  };
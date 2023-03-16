import PropTypes from 'prop-types';
import { List, Button, Container, Item } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Container>
              {name}: {number}
            </Container>
            <Button
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};

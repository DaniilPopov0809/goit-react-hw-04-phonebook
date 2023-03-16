import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={onChange}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

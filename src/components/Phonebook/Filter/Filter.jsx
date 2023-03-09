import PropTypes from 'prop-types';
import { Contanier, Input } from './Filter.style';


export const Filter = ({ handleFilter, valueFilter }) => {
  return (
    <Contanier>
      <label htmlFor="">Find contacts by name</label>
      <Input
        name="filter"
        onChange={handleFilter}
        value={valueFilter}
        type="text"
        placeholder="Сontact search ..."
      />
    </Contanier>
  );
};


Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

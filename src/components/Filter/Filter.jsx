import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = ({ target }) => {
    dispatch(setFilter(target.value.toLowerCase()));
  };

  return (
    <TextField
      fullWidth
      id="search"
      label="Find contacts by name"
      name="search"
      type="text"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={onFilter}
      value={filter}
    />
  );
};

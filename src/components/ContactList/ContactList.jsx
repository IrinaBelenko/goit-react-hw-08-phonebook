//import { selectContacts, selectFilter } from 'redux/contactsSlice';
import { filterContacts, selectError, selectIsLoading } from 'redux/selectors';
import { ContactListItem } from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(filterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>"is Loading"</h2>}
      {visibleContacts.length > 0 && (
        <ul>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};

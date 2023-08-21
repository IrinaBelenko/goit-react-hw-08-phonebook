import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
        </ListItemButton>
      </ListItem>{' '}
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText>{number}</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <Button
          variant="contained"
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          {' '}
          Delete
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};

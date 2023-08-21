import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
const defaultTheme = createTheme();

const Сontacts = () => {
  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <ContactForm> </ContactForm>
          <h2>Contacts</h2>
          <Filter></Filter>
          <ContactList></ContactList>
        </Container>
      </ThemeProvider>
    </main>
  );
};

export default Сontacts;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import {
  ContactError,
  ContactForm,
  ContactList,
  Filter,
  Loader,
  Notification,
} from 'components';

import { Container, Section } from 'components/App/App.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <h1>Phone book</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {isLoading && <Loader />}
        {error && (
          <b>
            <ContactError error={error} />
          </b>
        )}
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <b>
            <Notification message="There are no contacts in your phone book. Please add a contact!" />
          </b>
        )}
      </Container>
    </Section>
  );
};

export default Contacts;

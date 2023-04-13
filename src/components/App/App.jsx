// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

// import {
//   ContactForm,
//   ContactList,
//   Filter,
//   Notification,
//   ContactError,
//   Loader,
// } from 'components';

// import { GlobalStyle } from 'components/styles';
// import { Container, Section } from './App.styled';

// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Section>
//       <Container>
//         <GlobalStyle />
//         <h1>Phone book</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         {isLoading && <Loader />}
//         {error && (
//           <b>
//             <ContactError error={error} />
//           </b>
//         )}
//         {contacts.length > 0 ? (
//           <>
//             <Filter />
//             <ContactList />
//           </>
//         ) : (
//           <b>
//             <Notification message="There are no contacts in your phone book. Please add a contact!" />
//           </b>
//         )}
//       </Container>
//     </Section>
//   );
// };

// todo
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';

import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/styles';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Register = lazy(() => import('../../pages/Register/Register'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

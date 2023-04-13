import { Formik } from 'formik';
import { Notify } from 'notiflix';
// import * as Yup from 'yup';

import { useSelector, useDispatch } from 'react-redux';

// import { addContact } from 'redux/operations';

import { selectContacts } from 'redux/selectors';
import {
  StyledForm,
  StyledFormField,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
} from './RegisterForm.styled';

// const formSchema = Yup.object({
//   name: Yup.string()
//     .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
//       message:
//         "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
//     })
//     .required('Name is a required field'),

//   number: Yup.string()
//     .matches(/^\+?(\d{1,2})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
//       message:
//         'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. For example: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890, +91 (123) 456-7890',
//     })
//     .required('Number is a required field'),
// });

// export const RegisterForm = () => {
//   return <form></form>;
// };

export const RegisterForm = () => {
  const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const normalizedName = values.name.toLowerCase();
    const nameExists = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (nameExists) {
      return Notify.info(`${values.name} is already in contacts!`);
    }

    // dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      // validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledFormField>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type="text" name="name" />
          <StyledErrorMessage name="name" component="div" />
        </StyledFormField>

        <StyledFormField>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="email" name="email" />
          <StyledErrorMessage name="number" component="div" />
        </StyledFormField>

        <StyledFormField>
          <StyledLabel>Password</StyledLabel>
          <StyledInput type="password" name="password" />
          <StyledErrorMessage name="number" component="div" />
        </StyledFormField>

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </Formik>
  );
};

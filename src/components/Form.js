import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  StyledFormContainer,
  StyledFormTitle,
  StyledForm,
  StyledFormInput,
  StyledFormSelect,
  StyledFormOption,
  StyledFormBtn,
} from './styles/Form.style';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Συμπληρώστε ένα ονοματεπώνυμο')
    .typeError('Το ονοματεπώνυμο πρέπει να περιέχει μόνο γράμματα'),
  email: yup
    .string()
    .email()
    .required('Συμπληρώστε ένα σωστό email')
    .typeError('Συμπληρώστε ένα σωστό email'),
  phone: yup
    .number()
    .positive()
    .integer()
    .required()
    .typeError('Προσθέστε σωστό αριθμό τηλεφώνου'),
});

const Form = () => {
  const { register, reset, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const sendEmail = (formData) => {
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };
  return (
    <StyledFormContainer>
      <StyledFormTitle>Συμπληρώστε τη φόρμα!</StyledFormTitle>
      <StyledForm onSubmit={handleSubmit(sendEmail)}>
        <StyledFormInput
          type="text"
          name="name"
          placeholder="Ονοματεπώνυμο"
          {...register('name', { required: true })}
        />
        <p>{errors.name?.message}</p>
        <StyledFormInput
          type="text"
          name="email"
          placeholder="E-mail"
          {...register('email', { required: true })}
        />
        <p>{errors.email?.message}</p>
        <StyledFormInput
          type="text"
          name="phone"
          placeholder="Τηλέφωνο"
          {...register('phone', { required: true })}
        />
        <p>{errors.phone?.message}</p>
        <StyledFormSelect>
          <StyledFormOption name="visit" value="visit">
            Α' Επίσκεψη / Ενημέρωση
          </StyledFormOption>
          <StyledFormOption name="braces" value="braces">
            Αόρατοι Νάρθηκες
          </StyledFormOption>
          <StyledFormOption name="revisit" value="revisit">
            Επανεξέταση
          </StyledFormOption>
        </StyledFormSelect>
        <StyledFormBtn type="submit">ΣΤΕΙΛΤΕ ΤΟ ΜΗΝΥΜΑ ΣΑΣ</StyledFormBtn>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;

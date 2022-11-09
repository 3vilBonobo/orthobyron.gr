import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().positive().integer().required(),
});

const Form = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          name="name"
          placeholder="Ονοματεπώνυμο"
          {...register('name', { required: true })}
        />
        <p>{errors.name?.message}</p>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          {...register('email', { required: true })}
        />
        <p>{errors.email?.message}</p>
        <input
          type="text"
          name="phone"
          placeholder="Τηλέφωνο"
          {...register('phone', { required: true })}
        />
        <p>{errors.phone?.message}</p>
        <select>
          <option name="visit" value="visit">
            Α' Επίσκεψη / Ενημέρωση
          </option>
          <option name="braces" value="braces">
            Αόρατοι Νάρθηκες
          </option>
          <option name="revisit" value="revisit">
            Επανεξέταση
          </option>
        </select>
        <button type="submit">ΣΤΕΙΛΤΕ ΤΟ ΜΗΝΥΜΑ ΣΑΣ</button>
      </form>
    </>
  );
};

export default Form;

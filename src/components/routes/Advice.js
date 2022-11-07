import { patients } from '../../data/data';

const Advice = () => {
  return (
    <div>
      <h1>{patients.advice.title}</h1>
      <p>{patients.advice.info}</p>
    </div>
  );
};

export default Advice;

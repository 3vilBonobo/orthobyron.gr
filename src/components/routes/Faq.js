import { patients } from '../../data/data';

const Faq = () => {
  return (
    <div>
      <h1>{patients.faq.title}</h1>
      <p>{patients.faq.info}</p>
    </div>
  );
};

export default Faq;

import { patients } from '../../data/data';

const Advice = () => {
  return (
    <div>
      <h1
        dangerouslySetInnerHTML={{
          __html: patients.advice.title,
        }}
      ></h1>
      <p
        dangerouslySetInnerHTML={{
          __html: patients.advice.info,
        }}
      ></p>
    </div>
  );
};

export default Advice;

import { patients } from '../../data/data';

const FirstAid = () => {
  return (
    <div>
      <h1>{patients.firstAid.title}</h1>
      <p>{patients.firstAid.info}</p>
    </div>
  );
};

export default FirstAid;

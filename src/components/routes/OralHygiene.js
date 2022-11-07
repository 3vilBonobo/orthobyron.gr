import { patients } from '../../data/data';

const OralHygiene = () => {
  return (
    <div>
      <h1>{patients.oralHygiene.title}</h1>
      <p>{patients.oralHygiene.info}</p>
    </div>
  );
};

export default OralHygiene;

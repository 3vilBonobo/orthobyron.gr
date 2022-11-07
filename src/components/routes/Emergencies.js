import { patients } from '../../data/data';

const Emergencies = () => {
  return (
    <div>
      <h1>{patients.emergencies.title}</h1>
      <p>{patients.emergencies.info}</p>
    </div>
  );
};

export default Emergencies;

import { personnel } from '../../data/data';
const Doctor = () => {
  return (
    <div>
      <h1>Doctor</h1>
      <h2>{personnel.person1.name}</h2>
      <p>{personnel.person1.info}</p>
    </div>
  );
};

export default Doctor;

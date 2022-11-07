import { Outlet } from 'react-router-dom';
import { treatmentsGeneral } from '../../data/data';

const Treatments = () => {
  return (
    <div>
      <h1>{treatmentsGeneral.name}</h1>
      <p>{treatmentsGeneral.description}</p>

      <Outlet />
    </div>
  );
};

export default Treatments;

import { treatments } from '../../data/data';

const Invisalign = () => {
  return (
    <div>
      <h1>{treatments[3].name}</h1>
      <p>{treatments[3].description}</p>
    </div>
  );
};

export default Invisalign;

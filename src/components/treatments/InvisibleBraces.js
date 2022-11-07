import { treatments } from '../../data/data';

const InvisibleBraces = () => {
  return (
    <div>
      <h1>{treatments[1].name}</h1>
      <p>{treatments[1].description}</p>
    </div>
  );
};

export default InvisibleBraces;

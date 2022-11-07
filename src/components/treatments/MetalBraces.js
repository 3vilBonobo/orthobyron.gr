import { treatments } from '../../data/data';

const MetalBraces = () => {
  return (
    <div>
      <h1>{treatments[0].name}</h1>
      <p>{treatments[0].description}</p>
    </div>
  );
};

export default MetalBraces;

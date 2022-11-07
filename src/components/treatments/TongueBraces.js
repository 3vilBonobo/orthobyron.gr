import { treatments } from '../../data/data';

const TongueBraces = () => {
  return (
    <div>
      <h1>{treatments[2].name}</h1>
      <p>{treatments[2].description}</p>
    </div>
  );
};

export default TongueBraces;

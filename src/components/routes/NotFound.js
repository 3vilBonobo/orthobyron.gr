import { Link } from 'react-router-dom';
import CryingTooth from '../../assets/crying-tooth.jpg';
import {
  StyledLeftSection,
  StyledNotFound,
  StyledRightSection,
} from '../styles/NotFound.style';

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledLeftSection>
        <h2>Ω Όχι!!</h2>
        <h1>H σελίδα που ψάχνετε δεν υπάρχει!</h1>
        <h3>Error 404</h3>
        <h4>Μην ανησυχείτε όμως!</h4>
        <p>
          Πατήστε
          <Link to="/"> ΕΔΩ </Link>
          για να μεταφερθείτε στην Αρχική Σελίδα!
        </p>
      </StyledLeftSection>
      <StyledRightSection>
        <img src={CryingTooth} alt="" />
      </StyledRightSection>
    </StyledNotFound>
  );
};

export default NotFound;

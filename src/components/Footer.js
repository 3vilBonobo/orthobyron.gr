import { StyledFooter } from './styles/Footer.style';
import WorkHours from '../components/WorkHours';
import Attribution from './Attribution';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <WorkHours />
      </div>
      <Attribution />
    </StyledFooter>
  );
};

export default Footer;

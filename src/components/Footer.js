import { StyledFooter, StyledFooterHours } from './styles/Footer.style';
import WorkHours from '../components/WorkHours';
import Attribution from './Attribution';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterHours>
        <WorkHours />
      </StyledFooterHours>
      <Attribution />
    </StyledFooter>
  );
};

export default Footer;

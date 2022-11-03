import { StyledAttribution, StyledAttrLinks } from './styles/Footer.style';

const Attribution = () => {
  return (
    <StyledAttribution>
      <div class="copyright">Copyright 2022 - Orthobyron.gr</div>
      <div class="attr-dev">
        Powered by
        <StyledAttrLinks
          href="https://www.nikosvasilakos.gr/"
          target="”_blank”"
        >
          {' '}
          Nikos Vasilakos
        </StyledAttrLinks>
        , hosted by{' '}
        <StyledAttrLinks href="https://www.internetnow.gr/" target="”_blank”">
          Internet Now
        </StyledAttrLinks>
        , domain name by{' '}
        <StyledAttrLinks href="https://www.eexi.gr/" target="”_blank”">
          eexi.gr
        </StyledAttrLinks>
        , <br /> coded by{' '}
        <StyledAttrLinks href="https://github.com/3vilBonobo" target="”_blank”">
          {' '}
          Irinella Boutsika
        </StyledAttrLinks>
      </div>
    </StyledAttribution>
  );
};

export default Attribution;

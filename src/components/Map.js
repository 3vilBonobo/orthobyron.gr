import {
  StyledMapContainer,
  StyledMapInfo,
  StyledMapTitle,
  StyledMapText,
  StyledMapIframe,
  StyledMapWrapper,
} from './styles/Map.style';

const Map = ({ addresses }) => {
  return (
    <StyledMapContainer>
      <StyledMapWrapper>
        <StyledMapIframe
          title={addresses.title}
          src={addresses.mapSource}
          loading="lazy"
        ></StyledMapIframe>
      </StyledMapWrapper>
      <StyledMapInfo>
        <StyledMapTitle>{addresses.title}</StyledMapTitle>
        <StyledMapText>{addresses.address}</StyledMapText>
        <StyledMapText>{addresses.phone}</StyledMapText>
        <StyledMapText>{addresses.email}</StyledMapText>
      </StyledMapInfo>
    </StyledMapContainer>
  );
};

export default Map;

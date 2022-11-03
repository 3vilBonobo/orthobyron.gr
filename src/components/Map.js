import {
  StyledMapContainer,
  StyledMapInfo,
  StyledMapTitle,
  StyledMapText,
  StyledMap,
} from './styles/Map.style';

const Map = ({ addresses }) => {
  return (
    <StyledMapContainer>
      <StyledMapInfo>
        <StyledMapTitle>{addresses.title}</StyledMapTitle>
        <StyledMapText>{addresses.address}</StyledMapText>
        <StyledMapText>{addresses.phone}</StyledMapText>
        <StyledMapText>{addresses.email}</StyledMapText>
      </StyledMapInfo>
      <StyledMap></StyledMap>
    </StyledMapContainer>
  );
};

export default Map;

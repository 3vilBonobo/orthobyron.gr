import styled from 'styled-components';

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledMapWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`;

export const StyledMapIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const StyledMapInfo = styled.div`
  max-width: 250px;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StyledMapTitle = styled.h2`
  padding: 1rem 0.5rem;
  align-self: center;
`;
export const StyledMapText = styled.p`
  text-align: center;
`;

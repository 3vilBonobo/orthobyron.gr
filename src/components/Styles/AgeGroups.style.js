import styled from 'styled-components';

export const StyledAgeGroupsMainSection = styled.div`
  background-color: #fff;
  background-image: url('images/tooth_bg.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 3rem 10rem;
  }
`;

export const StyledAgeGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-block: 2rem;
  }
`;
export const StyledAgeGroupImage = styled.img`
  max-width: 400px;
  padding: 1rem;
`;
export const StyledAgeGroupInfo = styled.div`
  padding-inline: 2rem;
`;
export const StyledAgeGroupTitle = styled.h2`
  margin-bottom: 0.8rem;
`;
export const StyledAgeGroupSubtitle = styled.h3`
  margin-bottom: 1.2rem;
`;
export const StyledAgeGroupText = styled.p`
  line-height: 1.8rem;
`;

import { patients } from '../../data/data';
import {
  StyledFirstAidMainSection,
  StyledFirstAidWrapper,
  StyledFirstAidImage,
  StyledFirstAidInfo,
} from '../styles/FistAid.style';

const FirstAid = () => {
  return (
    <StyledFirstAidMainSection>
      <h1>{patients.firstAid.title}</h1>
      <StyledFirstAidWrapper>
        <StyledFirstAidInfo
          dangerouslySetInnerHTML={{
            __html: patients.firstAid.info,
          }}
        ></StyledFirstAidInfo>
        <StyledFirstAidImage src={patients.firstAid.image} />
      </StyledFirstAidWrapper>
    </StyledFirstAidMainSection>
  );
};

export default FirstAid;

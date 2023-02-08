import {
  StyledVideoWrapper,
  StyledIframe,
} from '../components/styles/YoutubeEmbed.style';

const YoutubeEmbed = ({ embedId }) => (
  <StyledVideoWrapper>
    <StyledIframe
      src={`https://www.youtube-nocookie.com/embed/${embedId}`}
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledVideoWrapper>
);
export default YoutubeEmbed;

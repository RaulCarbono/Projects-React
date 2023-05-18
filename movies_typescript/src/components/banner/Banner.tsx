import { createRef } from "react";
import {
  BannerContainerStyle,
  Replay,
  StyleFrame,
} from "./BannerContainerStyle";

const Banner = () => {
  const videoRef = createRef;
  return (
    <BannerContainerStyle>
      <StyleFrame
        ref={videoRef}
        src="https://www.youtube.com/watch?v=TlRpSTH1Sh0"
        frameBorder="0"
        allowFullScreen
        title=" Youtube video player"
      ></StyleFrame>
    </BannerContainerStyle>
  );
};
export default Banner;

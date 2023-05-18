import { styled } from "styled-components";

export const BannerContainerStyle = styled.div<any>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Replay = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyleFrame = styled.iframe<any>`
  position: absolute;

  width: 99%;
  height: 99vh;
`;

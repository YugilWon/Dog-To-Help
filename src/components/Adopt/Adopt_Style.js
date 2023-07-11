import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  margin-top: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70%;
  height: auto;
  z-index: -1;
  aspect-ratio: 16 / 9;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -270px;
  margin-bottom: 300px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

export const ContentText = styled.div`
  position: relative;
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 20px;
  z-index: 1;
`;

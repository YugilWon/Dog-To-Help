import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 40px);
  overflow: auto;
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin-top: 70px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SpeciesWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const VideoWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  margin-top: 400px;
  padding-bottom: 10px;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const BodyWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const CautionWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Body = styled.p`
  font-size: 18px;
  color: gray;
  line-height: 1.5;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
`;

export const Video = styled.video`
  max-width: 100%;
  height: 500px;
`;
export const CommentContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
  font-family: "GmarketSansMedium", sans-serif;
`;

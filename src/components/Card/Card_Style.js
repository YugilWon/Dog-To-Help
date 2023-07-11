import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: center;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1200px;
  background-color: white;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 27px;
  margin-bottom: 10px;
  text-align: center;
  font-family: "GmarketSansMedium", sans-serif;
`;

export const Body = styled.h2`
  font-size: 18px;
  color: gray;
  font-family: "GmarketSansMedium", sans-serif;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100%;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #ccc;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  resize: none;
  font-family: "GmarketSansMedium", sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Video = styled.video`
  max-width: 100%;
  max-height: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
`;
export const ImageWrapper = styled.div`
  padding: 10px;
  background-color: white;
`;

export const VideoWrapper = styled.div`
  margin-top: 20px;
`;

export const CircularCard = styled(Card)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const CircularImageWrapper = styled(ImageWrapper)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  margin-left: 50px;
  text-align: center;
`;

export const Name = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "GmarketSansMedium", sans-serif;
`;

export const Species = styled.p`
  font-size: 14px;
  color: black;
  font-family: "GmarketSansMedium", sans-serif;
`;

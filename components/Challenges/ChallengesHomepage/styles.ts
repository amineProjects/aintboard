import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #234c4c;
  height: 830px;

  .slogan {
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    font-size: 20px;
    font-weight: bold;
  }
`;

export const GameFont = styled.h1`
  font-family: ${(props) => props.theme.fonts.gameFont};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  padding-top: 2rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  height: 80%;
  width: 70%;
`;

export const CallToAction = styled.div`
  position: relative;
  background: rgba(53, 53, 53, 0.5);
  backdrop-filter: blur(40px);
  height: 15rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.border["10px"]};
`;

export const CallToActionFont = styled(GameFont)`
  font-size: 1.8rem;
  margin-bottom: 3rem;
`;
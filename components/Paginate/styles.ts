import styled from "styled-components";

export const PageNumberContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;

export const NumberWrap = styled.div`
  max-width: 80%;
  display: flex;
  overflow: auto;
`;

export const PageNumber = styled.p<PageNumberProps>`
  font-family: ${(props) => props.theme.fonts.gameFont}, sans-serif;
  height: 100%;
  font-size: 0.75em;
  margin: 0;
  color: #363946;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
  margin-left: 2px;
  margin-right: 2px;
  padding: 14px;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.isClicked ? props.theme.colors.darkGreen : ""};
  border-radius: ${(props) => (props.isClicked ? `50%` : "")};
  &:hover {
    color: darkblue;
    transition: 0.3s;
  }
`;

type PageNumberProps = {
  isClicked: boolean;
};

export const ArrowContainer = styled.div`
  margin-right: 12px;
  margin-left: 12px;
  width: 60px;
  & > div span {
    margin-left: 6px;
    margin-right: 6px;
    color: #696773;
    cursor: pointer;
    transition: 0.3s;
    font-size: 0.75em;
    transition: 0.3s ease all;
    &:hover {
      transition: 0.3s ease all;
      color: #819595;
    }
  }
  & > span:hover {
    color: darkblue;
    transition: 0.3s;
  }
`;

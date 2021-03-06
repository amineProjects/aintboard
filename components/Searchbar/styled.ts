import styled from "styled-components";
import { theme } from "styles/theme";

export const customSelectStyles = {
  container: (provided: object, props: any) => ({
    ...provided,
    width: props.selectProps.width ? props.selectProps.width : "38rem",
    margin: "0 auto",
    fontFamily: "Quicksand-Regular",
  }),
  control: (provided: object, props: any) => ({
    ...provided,
    backgroundColor: props.selectProps.inputBgColor
      ? props.selectProps.inputBgColor
      : "white",
    height: props.selectProps.height ? props.selectProps.height : "2.375rem",
  }),
  input: (provided: object, props: any) => ({
    ...provided,
    color: props.selectProps.inputBgColor === "white" ? "black" : "white",
  }),
  singleValue: (provided: object, props: any) => ({
    ...provided,
    color: props.selectProps.inputBgColor === "white" ? "black" : "white",
  }),
  menuPortal: (provided: object) => ({
    ...provided,
    zIndex: theme.zIndex["2nd"],
  }),
};

export const SearchBarContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  .links {
    width: 40rem;
    margin-top: ${(props) => props.theme.spacing.md};
    display: flex;
    justify-content: space-between;

    a {
      padding: 0.625rem ${(props) => props.theme.spacing.md};
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.dark};
      border: 2px solid white;
      border-radius: ${(props) => props.theme.border["10px"]};
    }
  }
`;

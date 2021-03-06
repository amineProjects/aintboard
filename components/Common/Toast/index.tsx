import styled from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { theme } from "styles/theme";

const WrappedToastContainer = ({ ...rest }) => (
  <div>
    <ToastContainer {...rest} style={{ zIndex: theme.zIndex["1st"] }} />
  </div>
);

export const Toast = styled(WrappedToastContainer).attrs({
  transition: Slide,
  autoClose: 2000,
  hideProgressBar: true,
})`
  .Toastify__toast-container {
  }

  .Toastify__close-button {
    top: -5px;
  }

  .Toastify__toast {
    padding: 1rem;

    &-body {
      display: flex;
      align-items: center;
      margin: 0;
      font-family: ${(props) => props.theme.fonts.rubikReg};
      font-weight: 500;
      color: black;
    }

    &--error {
      background-color: ${(props) => props.theme.colors.errorRed};
    }

    &--warning {
      background-color: ${(props) => props.theme.colors.errorRed};
    }

    &--success {
      background-color: ${(props) => props.theme.colors.lightYellow};
    }
  }
`;

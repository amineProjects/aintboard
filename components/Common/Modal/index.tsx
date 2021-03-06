import Modal from "react-modal";
import { ModalHeader, ModalContent } from "./styled";
import { theme } from "styles/theme";
import CloseIcon from "assets/img/Close";

if (typeof window !== "undefined") {
  Modal.setAppElement("body");
}

const ModalComponent = ({
  children,
  isOpen,
  closeModal,
  headerLabel = "Ain't Board",
  closeTimeoutMS = 500,
  maxwidth = "auto",
}: Props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: theme.zIndex["3rd"],
      padding: 0,
      border: 0,
      background: theme.colors.darkGreen,
      borderRadius: 10,
      minWidth: "30rem",
      maxWidth: maxwidth,
      maxHeight: "40rem",
      overlfow: "auto",
    },
    overlay: {
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.8)",
      zIndex: 1000,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={closeTimeoutMS}
      shouldCloseOnOverlayClick={false}
      htmlOpenClassName="ReactModal__Html--open"
      aria={{
        modal: true,
        labelledby: headerLabel,
      }}
    >
      <ModalHeader>
        <h3>{headerLabel}</h3>
        <CloseIcon onClick={closeModal} className="close-icon" />
      </ModalHeader>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  headerLabel: string;
  closeTimeoutMS?: number;
  maxwidth?: string;
};

export default ModalComponent;

import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { isEmpty } from "lodash";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import RTE from "components/Common/RTE";
import Input from "components/Common/Input";
import Label from "components/Common/Label";
import Button from "components/Common/Button";
import {
  InputContainer,
  ButtonContainer,
  ErrorMessage,
} from "components/Common/inputStyled";
import useCurrentUser from "hooks/useCurrentUser";
import { ModalState } from "types/reduxTypes";

import "react-datepicker/dist/react-datepicker.css";

const SubmitEntryForm = ({ closeModal }: Props) => {
  const user = useCurrentUser();
  const [message, setMessage] = useState("");

  const battleData = useSelector(
    (state: ModalState) => state.modal.modalData.battleData
  );

  const formSchema = Yup.object().shape({
    score: Yup.number().required("Score is required"),
    googleLink: Yup.string().required(
      "Video uploaded in Google Drive to verify your score"
    ),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        score: 0,
        message: "",
        googleLink: "",
      }}
      validationSchema={formSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userData = !isEmpty(user?.userData)
            ? JSON.parse(user?.userData || "")
            : { role: "" };
          const response = await axios.post("/api/online-battle/entry", {
            userId: userData._id,
            battleId: battleData._id,
            score: values.score,
            message: message,
            googleLink: values.googleLink,
          });
          if (!response.data.success) {
            toast.error(response.data.message);
            return;
          }
          closeModal();
          resetForm();
          toast.success("Entry submitted successfully!");
          // mutate(
          //   `/api/online-battles?first=${ONLINE_BATTLE_ITEM_COUNT}&offset=${
          //     1 * ONLINE_BATTLE_ITEM_COUNT
          //   }`
          // );
          // if (router.pathname === "/online-battles") {
          //   router.reload();
          // }
        } catch (err) {
          console.error("Entry submission error: ", err);
          toast.error(
            "There was an error. Entry was not submitted. Please contact support."
          );
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Label>
            Online Battles are joined by users to play a particular boardgame
            either in a real or online boardgame. At the end of the event, top 3
            users are awarded with trophies.
          </Label>

          <InputContainer>
            {errors.score && touched.score && (
              <ErrorMessage>{errors.score}</ErrorMessage>
            )}
            <Input
              name="score"
              label="Score"
              type="number"
              error={errors.score || ""}
            />
          </InputContainer>

          <InputContainer>
            {errors.googleLink && touched.googleLink && (
              <ErrorMessage>{errors.googleLink}</ErrorMessage>
            )}
            <Input
              name="googleLink"
              label="Google Drive Link"
              error={errors.googleLink || ""}
            />
          </InputContainer>

          <Label>
            Do you have any supporting message or any info on how you achieved
            this score?
          </Label>
          <InputContainer>
            <RTE passContentToParent={setMessage} />
          </InputContainer>

          <ButtonContainer>
            <Button bg="lightYellow" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting" : "Submit"}
            </Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

type Props = {
  closeModal: () => void;
};

export default SubmitEntryForm;

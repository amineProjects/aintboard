import { UserWrapper } from "./styled";
import {
  GIRL_ICON,
  BOY_ICON,
  ALPACA_ICON,
  KNIGHT_ICON,
  CHOOSE_AVATAR_COMPONENT,
} from "util/constants";

import GirlAvatar from "assets/img/GirlAvatar";
import BoyAvatar from "assets/img/BoyAvatar";
import AlpacaAvatar from "assets/img/AlpacaAvatar";
import KnightAvatar from "assets/img/KnightAvatar";
import DragonAvatar from "assets/img/dragon";
import WizardAvatar from "assets/img/wizardAvatar";
import UserMale from "assets/img/user/UserMale";

const Avatar = ({ iconType, from }: Props) => {
  let icon = <></>;

  switch (iconType) {
    case GIRL_ICON:
      icon = <GirlAvatar className="icon" />;
      break;
    default:
      icon = <UserMale className="icon" />;
      break;
  }

  return <UserWrapper from={from}>{icon}</UserWrapper>;
};

type Props = {
  iconType: string;
  from?: string;
};

export default Avatar;
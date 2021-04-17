import { DropDownContainer } from "./styled";

import Select from "react-select";

const DropDown = ({
  placeholder,
  marginLeft,
  options,
  onChange,
  keyProp = "key",
}: Props) => {
  return (
    <DropDownContainer marginLeft={marginLeft}>
      <Select
        key={keyProp}
        className="select"
        id={`search-select-${keyProp}`}
        inputId="search-select"
        placeholder={placeholder}
        isClearable={true}
        isSearchable={false}
        options={options}
        onChange={(selected) =>
          onChange(
            selected || {
              label: "",
              value: "",
            }
          )
        }
      />
    </DropDownContainer>
  );
};

type OptionItem = {
  label: string;
  value: string;
};

type Props = {
  placeholder?: string;
  marginLeft?: string;
  options?: OptionItem[];
  onChange: (selected: OptionItem) => void;
  keyProp?: string;
};

export default DropDown;

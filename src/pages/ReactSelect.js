import React from "react";
import Select from "react-select";

const MySelect = ({ options, handleChanges, label }) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const onInputChange = (selected) => {
    // console.log(selected);
    setSelectedOptions(selected);
    handleChanges(selected);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const darkTheme = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1c1c1c",
      borderColor: "#ffffff",
      width: "300px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#2e2e2e" : "#1c1c1c",
      color: "#ffffff",
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "250px",
    }),
  };

  return (
    <Select
      isMulti
      defaultValue={selectedOptions}
      onChange={onInputChange}
      name="color"
      styles={darkTheme}
      placeholder={label}
      options={options}
    />
  );
};

export default MySelect;

import React from "react";
import styles from "../styles/AllInput.css";
const AllInput = (props) => {
  const { value, onChange, onKeyDown, onClick } = props;
  return (
    <div>
      <input
        type="text"
        className="form-control  inputstyle"
        placeholder="✍ Add newItem"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClicK={onClick}
      ></input>
    </div>
  );
};
export default AllInput;

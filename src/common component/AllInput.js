import React from "react";
import styles from "../styles/AllInput.css";
const AllInput = (props) => {
  const { inputdata, setInputData, handleKeyDown, changeStyle } = props;
  return (
    <div>
      <input
        type="text"
        className="form-control  inputstyle"
        placeholder="✍ Add newItem"
        value={inputdata}
        onChange={(event) => setInputData(event.target.value)}
        onKeyDown={handleKeyDown}
        onClick={changeStyle}
      ></input>
    </div>
  );
};
export default AllInput;

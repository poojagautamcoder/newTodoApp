import React from "react";
import styles from "../styles/List.css";
const ListInput = (props) => {
  const { isEditItem, setIsEditItem, enterKeyPress } = props;
  return (
    <div>
      <input
        type="text"
        className=" output-form"
        value={isEditItem}
        onChange={(event) => setIsEditItem(event.target.value)}
        onKeyDown={enterKeyPress}
      />
    </div>
  );
};
export default ListInput;

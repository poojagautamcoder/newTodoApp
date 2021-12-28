import React from "react";
import styles from "../styles/Button.css";
const AllButtons = (props) => {
  const { addItem } = props;
  return (
    <button className="btn-addtodo" onClick={addItem}>
      +
    </button>
  );
};
export default AllButtons;

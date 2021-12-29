import React from "react";
import AllButtons from "../genericcomponent/AllButtons";
import styles from "../styles/Filter.css";

const Filterdynamic = (props) => {
  const { items, handleFilter } = props;
  return (
    <div className="dynamic-filter">
      <div className="filter">
        <AllButtons
          className="btn toggle-btn"
          onClick={() => handleFilter("all")}
          value="all"
        >
          All{items.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={() => handleFilter("completed")}
          value="completed"
        >
          Complete{items.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={() => handleFilter("incomplete")}
          value="incomplete"
        >
          Incomplete{items.status}
        </AllButtons>
      </div>
    </div>
  );
};
export default Filterdynamic;

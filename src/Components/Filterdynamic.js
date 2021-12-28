import React from "react";
import AllButtons from "../common component/AllButtons";
import styles from "../styles/Filter.css";

const Filterdynamic = (props) => {
  const { items, handleFilter } = props;
  return (
    <div className="dynamic-filter">
      <div className="filter">
        <AllButtons
          className="btn toggle-btn"
          onClick={(e) => handleFilter("all")}
          value="all"
        >
          All{items.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={(e) => handleFilter("completed")}
          value="completed"
        >
          Complete{items.status}
        </AllButtons>
        <AllButtons
          className="btn toggle-btn"
          onClick={(e) => handleFilter("incomplete")}
          value="incomplete"
        >
          Incomplete{items.status}
        </AllButtons>
      </div>
    </div>
  );
};
export default Filterdynamic;

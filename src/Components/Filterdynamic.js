import React from "react";
import styles from "../styles/Filter.css";

const Filterdynamic = (props) => {
  const { items, handleFilter, FilterItem } = props;
  return (
    <div className="dynamic-filter">
      <div className="filter">
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={FilterItem}
          onClick={(e) => handleFilter(e)}
          value={"all"}
        >
          All{items.status}
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={FilterItem}
          onClick={(e) => handleFilter(e)}
          value={"completed"}
        >
          Completed{items.status}
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          aria-pressed={FilterItem}
          onClick={(e) => handleFilter(e)}
          value={"incomplete"}
        >
          Incomplete{items.status}
        </button>
      </div>
    </div>
  );
};
export default Filterdynamic;

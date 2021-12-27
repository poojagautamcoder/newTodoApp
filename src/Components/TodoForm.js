import React from "react";
import styles from "../styles/Form.css";

const TodoForm = (props) => {

const {items,setInputData,inputdata,changeStyle,addItem,handleKeyDown}=props;





  return (
    <div>
      <h2 className="heading">Todos List</h2>
      <div className="addItems">
        <input
          type="text"
          placeholder="✍ Add newItem"
          className="form-control  inputstyle"
          value={inputdata}
          onChange={(event) => setInputData(event.target.value)}
          onKeyDown={handleKeyDown}
          onClick={changeStyle}
        />
        <button onClick={addItem} className="btn-addtodo">
          +
        </button>
      </div>
    </div>
  );
};
export default TodoForm ;

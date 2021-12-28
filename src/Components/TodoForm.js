import React from "react";
import styles from "../styles/Form.css";
import AllButtons from "../common component/AllButtons";
import AllInput from "../common component/AllInput";
const TodoForm = (props) => {
  const {
    items,
    setInputData,
    inputdata,
    changeStyle,
    addItem,
    handleKeyDown,
  } = props;
  return (
    <div>
      <h2 className="heading">Todos List</h2>
      <div className="addItems">
        <AllInput
          value={inputdata}
          onChange={(event) => setInputData(event.target.value)}
          onKeyDown={handleKeyDown}
          onClick={changeStyle}
          className="form-control inputstyle"
        />
        <AllButtons onClick={addItem} className="btn-addtodo">
          +
        </AllButtons>
      </div>
    </div>
  );
};
export default TodoForm;

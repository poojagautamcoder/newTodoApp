import React from "react";
import styles from "../styles/Form.css";
import AllButtons from "../genericcomponent/AllButtons";
import AllInput from "../genericcomponent/AllInput";
const TodoForm = (props) => {
  const {
    items,
    setInputData,
    inputdata,
    changeStyle,
    addItem,
    handleKeyDown,
  } = props;
  const onchangeValue = (event) => {
    setInputData(event.target.value);
  };
  return (
    <div>
      <h2 className="heading">Todos List</h2>
      <div className="addItems">
        <AllInput
          value={inputdata}
          onChange={onchangeValue}
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

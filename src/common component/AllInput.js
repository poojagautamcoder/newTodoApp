import React from "react";
const AllInput = (props) => {
  const { value, onChange, onKeyDown, onClick, className } = props;
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
        className={className}
      ></input>
    </div>
  );
};
export default AllInput;

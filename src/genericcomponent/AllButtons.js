import React from "react";

const AllButtons = (props) => {
  const { onClick, children, className } = props;
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};
export default AllButtons;

import React from "react";
  const Popup = props => {
  return (
    <div className="popup-boxdelete">
      <div className="box">
        <span className="Delete" onClick={props.handleClose}>x</span>
       <div className="cancel" onnClick={props.handleClose}>x</div>
       {props.content}
       </div>
    </div>
  );
};

export default Popup;

import React from "react";
import { PropTypes } from "prop-types";

const Popup = ({ deleteRec, togglePopup, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="popup-box">
          <div className="box">
            {/* <span className="close-icon" onClick={togglePopup}>
              x
            </span> */}
            <h4>Are you sure you want to permanently delete this Record</h4>
            <button className="btn btn-danger" onClick={() => deleteRec()}>
              Delete
            </button>{" "}
            <button className="btn btn-primary" onClick={togglePopup}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

Popup.prototype = {
  deleteRec: PropTypes.func,
  togglePopup: PropTypes.func,
  isOpen: PropTypes.bool,
};

Popup.default = {
  deleteRec: () => {},
  togglePopup: () => {},
};

export default Popup;

import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
const PatientList = ({ allData, editRec, togglePopup }) => {
  return (
    <>
      {allData?.map((e, i) => (
        <tr key={i}>
          <td width={10}>{i + 1}</td>
          <td>{e?.name}</td>
          <td>{e?.age}</td>
          <td>{e?.gender}</td>
          <td>{e?.symptoms}</td>
          <td>{e?.address}</td>
          <td width={170}>
            <button className="btn btn-danger" onClick={() => togglePopup(i)}>
              Delete
            </button>{" "}
            <button className="btn btn-primary" onClick={() => editRec(i)}>
              Edit
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

PatientList.prototype = {
  allData: PropTypes.array,
  editRec: PropTypes.func,
  togglePopup: PropTypes.func,
};

PatientList.default = {
  list: [],
  editRec: () => {},
  togglePopup: () => {},
};

export default PatientList;

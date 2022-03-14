import React from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
const PatientList = ({ allData, deleteRec, editRec }) => {
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
            <button className="btn btn-danger" onClick={() => deleteRec(i)}>
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
  deleteRec: PropTypes.func,
  editRec: PropTypes.func,
};

PatientList.default = {
  list: [],
  deleteRec: () => {},
  editRec: () => {},
};

export default PatientList;

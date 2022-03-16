import React, { useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useState } from "react";
import PatientList from "../Component/PatientList";
import Popup from "./Popup";
import { Button } from "bootstrap";
const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // all details store in one array
  const [allData, setAllData] = useState([]);
  let inputData = {};
  const [deleteId, setDeleteId] = useState("");

  //get localstorage value
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userList"));
    if (localData) {
      setAllData(localData);
    }
  }, []);

  //Popup
  const togglePopup = (i) => {
    setIsOpen(!isOpen);
    setDeleteId(i);
  };

  //empty form validation
  const formValidation = () => {
    inputData = { name, age, gender, address, symptoms };
    if (
      inputData.name &&
      inputData.gender &&
      inputData.gender &&
      inputData.address &&
      inputData.symptoms
    ) {
      return true;
    }
  };

  // Edit Record
  const editRec = (i) => {
    setName(allData[i].name);
    setAge(allData[i].age);
    setGender(allData[i].gender);
    setAddress(allData[i].address);
    setSymptoms(allData[i].symptoms);
  };

  // Delete Record
  const deleteRec = () => {
    const updateData = allData.filter((ele, ind) => {
      return ind !== deleteId;
    });
    localStorage.setItem("userList", JSON.stringify(updateData));
    setAllData(updateData);
    setIsOpen(false);
  };

  // on submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
      let list = [...allData];
      list.push(inputData);
      setAllData(list);
      localStorage.setItem("userList", JSON.stringify(list));
    }
    setName("");
    setAge("");
    setGender("");
    setAddress("");
    setSymptoms("");
  };

  return (
    <>
      <Row>
        <Col className="col-5 entry-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3 mt-0">
              <label className="mb-2">Enter Patient Name:</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">Enter Patient Age:</label>
              <input
                className="form-control"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-check-label mb-2">Gender:</label>
              <br />
              <input
                className="form-check-input me-1 ms-1"
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                className="form-check-input me-1 ms-3"
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
              <input
                className="form-check-input me-1 ms-3"
                type="radio"
                name="gender"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">Symptoms:</label>
              <input
                className="form-control"
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </div>
            <div className="form-group mb-5">
              <label>Address</label>
              <textarea
                className="form-control"
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <input className="btn btn-primary" type="submit" />
          </form>
        </Col>
        <Col className="col-7 form-list mt-4">
          <PatientList />
          <Table striped bordered>
            <thead>
              <tr>
                <th>No.</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Symptoms</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <PatientList
                allData={allData}
                deleteRec={deleteRec}
                editRec={editRec}
                togglePopup={togglePopup}
              />
            </tbody>
          </Table>
        </Col>
      </Row>

      <Popup deleteRec={deleteRec} togglePopup={togglePopup} isOpen={isOpen} />
    </>
  );
};

export default InputForm;

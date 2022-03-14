import logo from "./logo.svg";
import "./App.css";
import InputForm from "./Component/InputForm";
import { Col, Row } from "react-bootstrap";
import style from "./style.css";

function App() {
  return (
    <div className="App container-fluid">
      <h2 className="">Patient Details</h2>
      <InputForm />
    </div>
  );
}

export default App;

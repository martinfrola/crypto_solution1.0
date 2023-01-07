import Sidebar from "./containers/Sidebar";
import CentralPanel from "./containers/CentralPanel";
import React from "react";
import UseContext from "./context/UseContext";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <UseContext>
      <Container className="m-0 mr-0 ml-0 p-0 bg-primary w-100">
        <Row>
          <Sidebar />
          <CentralPanel />
        </Row>
      </Container>
    </UseContext>
  );
}

export default App;

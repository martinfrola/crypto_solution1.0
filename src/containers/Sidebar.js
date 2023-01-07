import React from "react";
import { Col } from "react-bootstrap";
export default function Sidebar() {
  return (
    <Col xs={3}>
      <div className="bg-secondary text-white h-100 position-fixed" l={12}>
        <h2>Hola sidebar</h2>
      </div>
    </Col>
  );
}

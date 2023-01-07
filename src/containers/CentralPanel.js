import React, { useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import CryptoContext from "../context/Context";
import { Table, Col } from "react-bootstrap";
export default function CentralPanel() {
  const { getApiData, apiResponseData } = useContext(CryptoContext);

  useEffect(() => {
    getApiData();
  }, []);
  console.log(apiResponseData);

  const styleImg = {
    height: "20px",
  };
  return (
    <Col xl={9} className="text-white">
      Hola que onda
      <div>
        <Table bordered size="xxl" className="text-white">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Market Capital</th>
            </tr>
          </thead>
          <tbody>
            {apiResponseData.map((i) => (
              <tr key={i.rank}>
                <td>{i.rank}</td>
                <td>
                  <img style={styleImg} src={i.iconUrl} alt="" />
                  {i.name} {i.symbol}
                </td>
                <td>{i.price}</td>

                {parseFloat(i.change) > 0.0 ? (
                  <td style={{ color: `green` }}>{i.change}</td>
                ) : (
                  <td style={{ color: `red` }}>{i.change}</td>
                )}

                <td>{i.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  );
}

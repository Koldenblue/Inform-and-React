import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Propositions from "../util/Propositions.json";

function Prop() {
  return (
    <Container style={{width:"20vw",marginLeft: "25vw"}}>
      <Tabs id="left-tabs-example" defaultActiveKey="14">
            {Propositions.map((prop) => {
                return (
                  <Tab eventKey={prop.proposition} title={`Proposition ${prop.proposition}`}>
                    <p>{prop.content}</p>
                  </Tab>
                );
              })}
          </Tabs>
    </Container>
  );
}

export default Prop;

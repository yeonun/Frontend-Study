import logo from "./logo.svg";
import "./App.css";

import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap";
import React, { useState } from "react";
import reactDom from "react-dom";
import Data from "./data";

function App() {
  let [data, setData] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="Navbar">
        <Navbar.Brand href="#home"> yeonun's shop </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="Jumbotron">
        <h1>Hello, I'm Yeonun!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          {
            data.map((num,i)=>{
              return(
              <Card data={data[i]} i={i}/>
              );
            })
          }
          </div>
        </div>
      </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src = {'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'}
        width="100%"
      />
      <h4> {props.data.title} </h4>
      <p>
        {props.data.content} & {props.data.price}
      </p>
    </div>
  );
}

export default App;

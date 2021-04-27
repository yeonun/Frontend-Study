import logo from "./logo.svg";
import "./App.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Jumbotron
} from "react-bootstrap";
import React, {useState} from "react";
import reactDom from "react-dom";
import Data from './data';


function App() {

  let [ data, setData ] = useState(Data);

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
          <div className="col-md-4">
            <img src="https://i.pinimg.com/originals/eb/53/88/eb538826c39467b9a20d5b6257175107.jpg" width="100%" />
            <h4> {data[0].title} </h4>
            <p> {data[0].content} & {data[0].price} </p>
          </div>
          <div className="col-md-4">
            <img src="https://i.pinimg.com/736x/f9/93/12/f99312310bf429bc11546a5b2b9ae887.jpg" width="100%" />
            <h4> {data[1].title} </h4>
            <p> {data[1].content} & {data[1].price} </p>
          </div>
          <div className="col-md-4">
            <img src="https://i.pinimg.com/736x/1e/32/d9/1e32d9150dd3670ef84ec8dc81b7a5bd.jpg" width="100%" />
            <h4> {data[2].title} </h4>
            <p> {data[2].content} & {data[2].price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

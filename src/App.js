import { ListItem } from "@mui/material";
import React, { useState } from "react";
import "../src/App.css";

import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <Navbar>
      <NavItem className="status">
        {" "}
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="status"> {props.leftIcon}</span>
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition in={activeMenu === "main"}>
        <div className="menu">
          <DropdownItem>opened</DropdownItem>
          <DropdownItem>pending</DropdownItem>
          <DropdownItem>closed</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" onClick={() => setOpen(!open)}>
        status
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
export default App;

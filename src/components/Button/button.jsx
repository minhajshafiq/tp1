import React from "react";
import "./button.css";

function Header(props) {
  return (
    <button className='button'>{props.text}</button>
  );
}

export default Header;
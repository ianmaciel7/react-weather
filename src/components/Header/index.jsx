import React from "react";
import HeaderLink from "../HeaderLink";
import "./index.css";

const header = (props) => {
  return (
    <div className="header">
      <div className="main-link">
        <HeaderLink url="#" name="React-Weather" />
      </div>      
    </div>
  );
};

export default header;

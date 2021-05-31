import React from "react";
import "./index.css";

const headerLink = (props) => {
  return (
    <div>
      <a className="link" href={props.url}>{props.name}</a>
    </div>
  );
};

export default headerLink;

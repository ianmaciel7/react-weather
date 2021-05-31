import React from "react";
import Spinner from "../Spinner";
import "./index.css";

const card = (props) => {
  const iconName = props.city.weather[0].icon;
  const icon =
    iconName !== undefined
      ? `http://openweathermap.org/img/wn/${iconName}@4x.png`
      : null;

  if (props.loading === false && props.error === false) {
    return (
      <article className="card">
        <div className="card-title">
          <strong>{props.city.name}</strong>, {props.city.sys.country}
          <div>{props.city.weather[0].description}</div>
        </div>
        <div className="card-main">
          <div className="card-footer">
            <strong>{props.city.main.temp}°C</strong>
          </div>
          <div className="card-img">
            <img src={icon} alt="" />
          </div>
        </div>
      </article>
    );
  } else if (props.loading === true && props.error === false) {
    return (
      <div className="card">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="card">
        <strong>Not Found</strong>        
      </div>
    );
  }
};

export default card;

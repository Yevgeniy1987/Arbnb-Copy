import React from "react";

export function Cards({ img, rate, review, country, content1, content2 }) {
  return (
    <div className="card card--main">
      <img src={img} alt="" className="card--img" />
      <div className="card--content">
        <div className="card--stats">
          <img src="../src/assets/Star 1.png" alt="" className="star" />
          <span>{rate}</span>
          <span className="gray">{review}</span>
          <span className="gray">{country}</span>
        </div>
        <p>{content1}</p>
        <p>{content2}</p>
      </div>
    </div>
  );
}

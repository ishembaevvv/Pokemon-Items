import React from "react";
import "./Cards.css";

export default function Cards({ el }) {
  return (
    <div className="cards">
      <img style={{backgroundImage: `url${el.url}`}} src={el.url} />
      <p>{el.name}</p>
    </div>
  );
}

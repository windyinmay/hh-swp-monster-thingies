import React from "react";
import { Card } from "../cards/card";

import "./card-list.css";

export function CardList(props) {
  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

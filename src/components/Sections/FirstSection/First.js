import React from "react";
import { Column } from "./Column";
import "./style.css";
export const First = () => {
  return (
    <div className="Section-1">
      <div className="Section-1__header">
        <h1>Code Challenge</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis
          tempore reprehenderit accusantium soluta corrupti natus nesciunt alias
          repellat libero.
        </p>
        <div className="Section-1__flex">
          <Column />
          <Column />
          <Column />
        </div>
      </div>
    </div>
  );
};

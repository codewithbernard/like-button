import React from "react";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";

const LikeButton = () => {
  return (
    <button className="like-button-wrapper">
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className="suffix">d</span>
      </div>
    </button>
  );
};

export default LikeButton;

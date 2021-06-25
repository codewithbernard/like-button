import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";

const particleList = Array.from(Array(10));

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(0);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(clicked + 1);
      }}
      className={cn("like-button-wrapper", { liked, clicked: clicked > 0 })}
    >
      {liked && (
        <div className="particles">
          {particleList.map((_, index) => (
            <div
              className="particle-rotate"
              style={{
                transform: `rotate(${
                  (360 / particleList.length) * index + 1
                }deg)`,
              }}
            >
              <div className="particle-tick" />
            </div>
          ))}
        </div>
      )}
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className="suffix">d</span>
      </div>
    </button>
  );
};

export default LikeButton;

import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(0);

  return (
    <button
      key={clicked}
      onClick={() => {
        setLiked(!liked);
        setClicked(clicked + 1);
      }}
      className={cn("like-button-wrapper", { liked, clicked: clicked > 0 })}
    >
      <div className="like-button">
        <Hand />
        <span>Like</span>
        <span className="suffix">d</span>
      </div>
    </button>
  );
};

export default LikeButton;

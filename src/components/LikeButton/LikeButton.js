import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={cn("like-button-wrapper", { liked })}
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

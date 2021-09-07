import { h } from "preact";
import { useEffect, useState } from "react";
import style from "./style.css";

export default ({ boost, reload = false, position }) => {
  const rotation = Math.random() * 360;
  const size = Math.random() * 7 + 6;

  const [state, setState] = useState({
    position: position ?? {
      top: `${Math.random() * (boost ? 120 : 100)}%`,
      left: `${Math.random() * (boost ? 120 : 100)}%`,
    },
    color: ["#A57E59", "#DBB85F", "#91B5C8"][Math.floor(Math.random() * 3) % 3],
  });

  useEffect(() => {
    if (reload) {
      setState({
        position: {
          top: `${Math.random() * (boost ? 120 : 100)}%`,
          left: `${Math.random() * (boost ? 120 : 100)}%`,
        },
        color: ["#A57E59", "#DBB85F", "#91B5C8"][
          Math.floor(Math.random() * 3) % 3
        ],
      });
    }
  }, [reload]);

  return (
    <div
      className={style.rect}
      style={{
        width: size,
        height: size,
        borderRadius: size / 6,
        backgroundColor: state.color,
        transform: `rotate(${rotation}deg)`,
        top: state.position.top,
        bottom: state.position.bottom,
        right: state.position.right,
        left: state.position.left,
      }}
    />
  );
};

import React from "react";

export const NextArrow = (props) => {
    return (
      <>
        <div
          className={props.className}
          style={{ ...props.style, backgroundColor: "#3b3d54" }}
          onClick={props.onClick}
       />
      </>
    );
};

export const PrevArrow = (props) => {
    return (
      <>
        <div
          className={props.className}
          style={{ ...props.style, backgroundColor: "#3b3d54" }}
          onClick={props.onClick}
        />
      </>
    );
};

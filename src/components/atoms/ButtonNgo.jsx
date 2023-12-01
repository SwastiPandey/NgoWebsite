import React from "react";

const ButtonNgo = ({ text, link, className }) => {
  const defaultClass = "btn";
  return (
    <a href={link} className={`${defaultClass} ${className}`}>
      {text}
    </a>
  );
};

export default ButtonNgo;

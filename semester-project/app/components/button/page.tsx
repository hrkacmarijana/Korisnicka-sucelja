import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  backgroundColor = "#7A6F69", // Default background color
  textColor = "#EBE9E9", // Default text color
}) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
  };

  return (
    <button
      onClick={onClick}
      className="py-2 rounded-2xl font-bold px-8"
      style={buttonStyle}>
      {title}
    </button>
  );
};

export default Button;

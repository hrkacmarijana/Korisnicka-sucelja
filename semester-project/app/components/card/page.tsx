import Image from "next/image";
import React from "react";

interface cardProps {
  id: string;
  imageUrl: string;
  name: string;
  text: string;
  visible: boolean;
}
const Card: React.FC<cardProps> = ({ id, imageUrl, name, text, visible }) => {
  return (
    <div className="flex flex-col w-80 gap-4 text-center">
      <div className="w-150 h-150 relative">
        <img
          src={imageUrl}
          alt={id}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold">{name}</h1>
      <span>{text}</span>
    </div>
  );
};

export default Card;

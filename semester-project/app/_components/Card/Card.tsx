import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./styles.modules.css";

export interface cardProps {
  id: string;
  imageUrl: string;
  name: string;
  text: string;
  species?: string;
  page: string;
}
const Card: React.FC<cardProps> = ({
  id,
  imageUrl,
  name,
  text,
  species,
  page,
}) => {
  return (
    <Link href={`/${page}/${id}`}>
      <div className="main flex flex-col w-80 gap-4 text-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="w w-80 h-80 relative">
          <Image
            src={imageUrl}
            alt={id}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <h1 className="text-2xl font-bold">{name}</h1>
        <span className="text-justify">{text}</span>
      </div>
    </Link>
  );
};

export default Card;

import Link from "next/link";
import React from "react";

const pages = {
  Dogs: "/pets/choosePet/dogs",
  Cats: "/pets/choosePet/cats",
  Other: "/pets/choosePet/other",
};

function ChoosePet() {
  return (
    <div>
      <h1 className="text-4xl flex justify-center">Choose Your Pet</h1>
      <ul className="text-2xl flex-column">
        {Object.entries(pages).map(([name, path]) => (
          <li key={name} className="dropdown">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChoosePet;

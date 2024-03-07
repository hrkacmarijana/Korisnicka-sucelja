"use client";

import { FC } from "react";
import Card from "../Card/Card";
import "./filterA.modules.css";
import { useState } from "react";
import { TypeAnimalListItem } from "@/app/lib/contentfulClient";
import Filter from "../Filter/Filter";

interface CardsProps {
  animals: TypeAnimalListItem[];
}

const Cards: FC<CardsProps> = ({ animals }) => {
  const [filteredAnimals, setFilteredAnimals] = useState(animals);
  const AnimalTypes = ["cat", "dog", "other"];

  const filterAnimals = (animalType: string) => {
    const newAnimals = animals.filter(
      (animal) => animal.species === animalType
    );
    setFilteredAnimals(newAnimals);
  };

  return (
    <>
      <div >
        <Filter
          categories={AnimalTypes}
          filterItems={filterAnimals}
          allData={animals}
          setItems={setFilteredAnimals}
        />
        <div className="filter-animals-list">
          {filteredAnimals &&
            filteredAnimals.map((animal) => (
              <div key={animal.id}>
                <Card
                  id={animal.id}
                  name={animal.name}
                  text={animal.description}
                  species={animal.species}
                  imageUrl={animal.featuredImage.url}
                  page="pets"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

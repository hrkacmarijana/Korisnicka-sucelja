import { Metadata } from "next";
import "./pets.modules.css";
import contentfulService from "../lib/contentfulClient";
import FilterAnimals from "@/app/_components/FilterAnimals/FilterAnimals";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


export const metadata: Metadata = {
  title: "Pets",
};

async function Pets() {
  const animals = await contentfulService.getAllAnimals();

  return (
    <div className="pets bg-purple-200">
      <div className="pets-text-section">
        <h1>ADOPTABLE PETS</h1>
        <p className="text-justify">
          Welcome to our Pets section, a heartwarming space where you can
          explore a delightful array of adoptable companions eagerly awaiting
          their forever homes. From playful cats to loyal dogs and charming
          critters, our diverse selection showcases the unique personalities and
          stories of each furry friend. Every adoption tale is a chance to make
          a lasting connection, offering not just a home to these animals but a
          promise of companionship and love. Browse through the profiles, each
          adorned with captivating images and endearing descriptions, and
          discover the perfect match for your lifestyle. Join us in the joyful
          journey of pet adoption, where the unconditional love of a new furry
          family member awaits.
        </p>
        <h1>CHOOSE YOUR FURRY FRIEND TODAY</h1>
      </div>
      <div className="pets-section ">
        <FilterAnimals animals={animals} />
      </div>
    </div>
  );
}

export default Pets;

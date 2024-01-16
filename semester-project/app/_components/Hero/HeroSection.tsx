require("dotenv").config();

import Image from "next/image";
import Card from "@/app/_components/Card/Card";
import Link from "next/link";
import "./hero.modules.css";
import CardSlider from "../CardSlider/CardSlider";
import contentfulService from "@/app/lib/contentfulClient";

const card2 = [
  {
    id: "story1",
    imageUrl: "/story1.png",
    name: "Rachel and Luna",
    text: "In the quiet shelter, Luna, a playful pup with soulful eyes, caught Rachels heart instantly. Despite Lunas troubled past, Rachels patient love and unwavering commitment transformed Luna into a beacon of joy, proving that in each other, they found their forever home.",
    species: "cat",
  },

  {
    id: "story2",
    imageUrl: "/story2.png",
    name: "Max and Bailey",
    text: "Amidst the bustling city, Max met Bailey, a scrappy dog with a heart full of loyalty, forming an unbreakable bond that weathered life storms together, proving that sometimes, the best adventures come with a wagging tail by your side.",
    species: "cat",
  },

  {
    id: "story3",
    imageUrl: "/story3.png",
    name: "Claire and Mia",
    text: "In a quaint corner of town, Claire encountered Mia, a graceful feline with an air of mystery, and their shared moments of quiet understanding and playful antics painted a portrait of a friendship that spoke volumes without a single meow uttered.",
    species: "cat",
  },
];

export default async function HeroSection() {
  const animals = await contentfulService.getAllAnimals();
  const cards = animals.map((animal) => ({
    id: animal.id,
    imageUrl: animal.featuredImage.url,
    name: animal.name,
    text: animal.description,
    species: animal.species,
  }));

  const stories = card2.map((story) => ({
    id: story.id,
    name: story.name,
    text: story.text,
    imageUrl: story.imageUrl,
    species: "cat",
  }));
  return (
    <>
      <div id="section-1 " className=" relative text-lb">
        <div className="background-container">
          <div className="home-container ">
            <div className="logo-container">
              <Image
                src="/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="content-container ">
              <h1 className=" flex justify-center max-w-xl text-center font-bold">
                Our four-legged friends need your help.
              </h1>
              <div className="button-container">
                <Link
                  href="\pets"
                  className="button bg-purple-600 text-white rounded-2xl hover:bg-purple-800">
                  FIND YOUR FRIEND
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-2" className=" flex justify-center text-center ">
        <div className="flex flex-col max-w-3xl gap-7">
          <h1 className="text-4xl">
            Pets change our lives.
            <br />
            We are on a quest to change theirs.
          </h1>
          <span className="text-xl">
            Quest for True Paw is a nonprofit organization dedicated to
            rescuing, fostering, and rehoming the abandoned, sick, and injured
            animals around our city.
            <br />
            <br />
            With your help, we hope to make a difference in the lives of these
            wonderful animals.
          </span>
        </div>
      </div>

      <div
        id="section-3"
        className="section-3 bg-lb flex justify-center w-full py-24 px-5">
        <div className="flex flex-col items-center justify-center w-full gap-20">
          <h1 className="text-5xl  ">Meet our pets</h1>
          <div className="flex flex-row flex-wrap  justify-around w-full px-24 gap-10">
            <CardSlider cards={cards} />
          </div>
          <div className="text-2xl">
            <Link
              href="/pets"
              className="bg-purple-600 text-white rounded-2xl font-bold px-8 py-4 text-2xl hover:bg-purple-800 ">
              SEE MORE PETS
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-image relative ">
        <div className="bg-cnt-2">
          <div className="section-4 ">
            <div className="text-section flex flex-col max-w-3xl gap-20 text-center text-lb ">
              <h1 className="text-5xl font-bold  bg-black bg-opacity-50 max-w-fit self-center">
                How You Can Help
              </h1>
              <span className=" bg-black bg-opacity-50">
                There are countless ways you can help us in our quest for paws.
                You can make a donation (however big or small), join our
                fundraiser events, or volunteer your time and home as a foster
                parent.
              </span>
              <div className="button-container">
                <Link
                  href="/donations"
                  className="button bg-white text-purple-700 rounded-2xl font-bold px-8 py-4 text-2xl hover:bg-lb">
                  DONATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5 bg-lb flex justify-center w-full py-24 px-5">
        <div className="flex flex-col items-center justify-center w-full gap-48">
          <h1 className="text-5xl  ">Success stories</h1>
          <div className="flex flex-wrap justify-around w-full px-24 gap-10">
            <CardSlider cards={stories} />
          </div>
          <div className="text-2xl">
            <Link
              href="/community"
              className="bg-purple-600 text-white rounded-2xl font-bold px-8 py-4 text-2xl hover:bg-purple-800">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

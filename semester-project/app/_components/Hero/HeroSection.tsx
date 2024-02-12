import Image from "next/image";
import "./hero.modules.css";
import CardSlider from "../CardSlider/CardSlider";
import Logo from "@/components/Logo/Logo";
import contentfulService from "@/app/lib/contentfulClient";
import Button from "../Button/Button";

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
      <div className="main">
        <div id="section-1 " className=" relative text-white">
          <div className="background-container">
            <Image
              className="background-container"
              src="/home-bg.png"
              alt="bg-image"
              fill={true}
              priority
            />

            <div className="content-container ">
              <Logo />
              <h1 className=" max-w-xxl text-center font-bold ">
                Our four-legged friends need your help.
              </h1>
              <Button textHolder="find your friend" href="/pets"></Button>
            </div>
          </div>
        </div>
        <div id="section-2" className="section ">
          <div className="text-cnt ">
            <h1 className=" font-bold">
              Pets change our lives.
              <br />
              We are on a quest to change theirs.
            </h1>
            <span>
              Quest for True Paw is a nonprofit organization dedicated to
              rescuing, fostering, and rehoming the abandoned, sick, and injured
              animals around our city.
              <br />
              <br />
              With your help, we hope to make a difference in the lives of these
              wonderful animals.
            </span>
            <div className="button-container">
              <Button textHolder="more about us" href="/about" />
            </div>
          </div>
        </div>
        <div id="section-3" className="section  bg-purple-200 w-full ">
          <div className="container w-full ">
            <h1 className="heading">MEET OUR PETS</h1>
            <div className="cards-cnt w-full ">
              <CardSlider cards={cards} />
            </div>
            <Button textHolder="see more pets" href="/pets"></Button>
          </div>
        </div>

        <div id="section-4">
          <div className="bg-cnt-2">
            <Image
              className="background-container"
              src="/bg2.jpg"
              alt="bg-image"
              fill={true}
              priority
            />
            <div className="cnt-4">
              <h1 className="font-bold">How You Can Help</h1>
              <span className="text-justify">
                There are countless ways you can help us in our quest for paws.
                You can make a donation (however big or small), join our
                fundraiser events, or volunteer your time and home as a foster
                parent.
              </span>
              <Button textHolder="donate" href="/pets"></Button>
            </div>
          </div>
        </div>
        <div id="section-5" className="section bg-purple-200 w-full">
          <div className="container w-full">
            <h1 className="heading">SUCCESS STORIES</h1>
            <div className="cards-cnt w-full">
              <CardSlider cards={stories} />
            </div>
            <Button textHolder="read more" href="/pets"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

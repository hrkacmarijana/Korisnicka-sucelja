"use client";
import Image from "next/image";
import Button from "./components/button/page";
import Card from "./components/card/page";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <div id="section-1 " className=" relative text-lb">
        <div className="background-container">
          <Image
            src="/home-bg.png"
            alt="home-bg"
            layout="fill"
            objectFit="cover"
            className="-z-10"
          />
          <div className="flex flex-col items-center pt-48 px-5 pb-44">
            <div className="w-96 h-64 relative">
              <Image
                src="/logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col items-center gap-10">
              <h1 className="text-5xl flex justify-center max-w-xl text-center font-bold">
                Our four-legged friends need your help.
              </h1>
              <div className="text-2xl">
                <Button
                  title="Adopt a friend"
                  backgroundColor="#EBE9E9"
                  textColor="#7A6F69"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 flex justify-center text-center py-60 px-5">
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

      <div className="section-3 bg-lb flex justify-center w-full py-24 px-5">
        <div className="flex flex-col items-center justify-center w-full gap-20">
          <h1 className="text-5xl  ">Meet our pets</h1>
          <div className="flex flex-wrap  justify-around w-full px-24 gap-10">
            <Card
              id="pet1"
              imageUrl="/dog1.png"
              name="Rocky"
              text="Meet Rocky, a playful and affectionate pup from our shelter, eagerly waiting for a loving family to call his own."
              visible={true}
            />
            <Card
              id="pet2"
              imageUrl="/cat1.png"
              name="Whiskers"
              text=" Meet Whiskers, a charming and curious feline, ready to grace your home with endless purrs of affection."
              visible={true}
            />
            <Card
              id="pet3"
              imageUrl="/dog2.png"
              name="Luna"
              text="Meet Luna, a gentle and loving  companion, seeking a forever home filled with cuddles and warmth."
              visible={true}
            />
          </div>
          <div className="text-2xl">
            <Button title="See more pets" />
          </div>
        </div>
      </div>
      <div className="bg-image relative ">
        <div className="bg-cnt">
          <Image
            src="/bg2.png"
            alt="bg2"
            layout="fill"
            objectFit="cover"
            className="-z-10"
          />
          <div className="section-4 relative flex justify-center px-5 py-28">
            <div className="flex flex-col max-w-3xl gap-20 text-center text-lb ">
              <h1 className="text-5xl font-bold  bg-black bg-opacity-50 max-w-fit self-center">
                How You Can Help
              </h1>
              <span className=" bg-black bg-opacity-50">
                There are countless ways you can help us in our quest for paws.
                You can make a donation (however big or small), join our
                fundraiser events, or volunteer your time and home as a foster
                parent.
              </span>
              <div className="text-2xl">
                <Button
                  title="Donate"
                  backgroundColor="#EBE9E9"
                  textColor="#7A6F69"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5 bg-lb flex justify-center w-full py-24 px-5">
        <div className="flex flex-col items-center justify-center w-full gap-20">
          <h1 className="text-5xl  ">Success stories</h1>
          <div className="flex flex-wrap justify-around w-full px-24 gap-10">
            <Card
              id="story1"
              imageUrl="/story1.png"
              name="Rachel and Luna"
              text="In the quiet shelter, Luna, a playful pup with soulful eyes, caught Rachels heart instantly. Despite Lunas troubled past, Rachels patient love and unwavering commitment transformed Luna into a beacon of joy, proving that in each other, they found their forever home."
              visible={true}
            />
            <Card
              id="story2"
              imageUrl="/story2.png"
              name="Max and Bailey"
              text="Amidst the bustling city, Max met Bailey, a scrappy dog with a heart full of loyalty, forming an unbreakable bond that weathered life storms together, proving that sometimes, the best adventures come with a wagging tail by your side."
              visible={true}
            />
            <Card
              id="story3"
              imageUrl="/story3.png"
              name="Claire and Mia"
              text="In a quaint corner of town, Claire encountered Mia, a graceful feline with an air of mystery, and their shared moments of quiet understanding and playful antics painted a portrait of a friendship that spoke volumes without a single meow uttered."
              visible={true}
            />
          </div>
          <div className="text-2xl">
            <Button title="Read more" />
          </div>
        </div>
      </div>
    </>
  );
}

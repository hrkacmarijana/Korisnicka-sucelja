import { Metadata } from "next";
import Card from "../_components/Card/Card";
import "./blog.modules.css";
import { useState } from "react";
import contentfulService from "../lib/contentfulClient";
import FilterAnimals from "@/app/_components/FilterAnimals/FilterAnimals";
import Cards from "@/app/_components/FilterAnimals/FilterAnimals";
import CardSlider from "../_components/CardSlider/CardSlider";

export const metadata: Metadata = {
  title: "Blog",
};

async function Blog() {
  const stories = await contentfulService.getAllStories();

  return (
    <div className="blog bg-purple-200">
      <div className="text-section">
        <h1>
          Joyful Journeys <br /> Heartwarming Tales of Love and Friendship
        </h1>
        <p>
          Welcome to 'Joyful Journeys' – a collection of heartwarming tales
          filled with love, friendship, and the magic of companionship. Join us
          as we embark on delightful adventures, where every story is a
          testament to the joy that animals bring into our lives. Get ready to
          be inspired and uplifted by the power of unconditional love and the
          bond between humans and their furry friends.
        </p>
      </div>
      <div className="stories-section">
        {stories &&
          stories.map((story) => (
            <div key={story.id}>
              <Card
                id={story.id}
                name={story.title}
                text={story.intro}
                imageUrl={story.image.url}
                page={`blog`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;

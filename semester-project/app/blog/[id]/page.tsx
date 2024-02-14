import { Metadata } from "next";
import Image from "next/image";
import "./styles.modules.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulService from "@/app/lib/contentfulClient";
import Link from "next/link";

const metadata: Metadata = {
  title: "Blog",
};

interface Params {
  id: string;
}

async function Story({ params }: { params: Params }) {
  const story = await contentfulService.getStoryById(params.id);

  let imageRatio = 0;
  if (story && story.image) {
    imageRatio = story.image.height / story.image.width;
  }

  return (
    <>
      {story && (
        <div className="story bg-purple-200">
          <div className="banner">
            {story.image && (
              <Image
                className="story-img story-main-img"
                src={story.image.url}
                width={450}
                height={450 * imageRatio}
                alt={story.title}
              />
            )}
          </div>
          <h1>{story.title}</h1>
          {story.text && (
            <div className="story-info bg-purple-200">
              {documentToReactComponents(story.text)}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Story;

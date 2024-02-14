import { Metadata } from "next";
import Image from "next/image";
import "./styles.modules.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulService from "@/app/lib/contentfulClient";
import Link from "next/link";
import CardSlider from "@/app/_components/CardSlider/CardSlider";

const metadata: Metadata = {
  title: "Animal",
};

interface Params {
  id: string;
}

async function Animal({ params }: { params: Params }) {
  const animal = await contentfulService.getAnimalById(params.id);

  let imageRatio = 0;
  if (animal && animal.featuredImage) {
    imageRatio = animal.featuredImage.height / animal.featuredImage.width;
  }

  return (
    <>
      {animal && (
        <div className="animal bg-purple-200">
          <div className="banner">
            {animal.featuredImage && (
              <Image
                className="animal-img animal-main-img"
                src={animal.featuredImage.url}
                width={450}
                height={450 * imageRatio}
                alt={animal.name}
              />
            )}
            {animal.imagesCollection &&
              animal.imagesCollection.length !== 0 && (
                <div className="animal-img-container">
                  {animal.imagesCollection.map((image) => {
                    let imageRatio = image.width / image.height;
                    return (
                      <Image
                        key={image.url}
                        className="animal-img"
                        src={image.url}
                        width={250 * imageRatio}
                        height={250}
                        alt={animal.name}
                      />
                    );
                  })}
                </div>
              )}
          </div>
          <h1>{animal.name}</h1>
          {animal.details && (
            <div className="animal-info bg-purple-200">
              {documentToReactComponents(animal.details)}
            </div>
          )}
          <div className="button-container">
            {animal && (
              <Link
                href={`/adopt/${animal.id}`}
                className="button bg-purple-600 text-white  hover:bg-purple-800"
              >
                ADOPT {animal.name}
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Animal;

import { Metadata } from "next";
import Image from "next/image";
import "./styles.modules.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentfulService from "@/app/lib/contentfulClient";
import Link from "next/link";

const metadata: Metadata = {
  title: "About Us",
};

interface Params {
  id: string;
}

async function Animal({ params }: { params: Params }) {
  const animal = await contentfulService.getAnimalById(params.id);

  let imageRatio = 0;
  if (animal) {
    imageRatio = animal.featuredImage.height / animal.featuredImage.width;
  }

  return (
    <>
      {animal && (
        <div className="animal bg-purple-200">
          <div className="banner">
            <Image
              className="animal-img animal-main-img"
              src={animal.featuredImage.url}
              width={450}
              height={450 * imageRatio}
              alt={animal.name}
            />
            {animal.imagesCollection &&
              animal.imagesCollection?.length !== 0 && (
                <>
                  <div className="animal-img-container">
                    {animal.imagesCollection.map((image) => {
                      let imageRatio = image.width / image.height;
                      return (
                        <Image
                          key={image.url}
                          className="animal-img"
                          src={image.url}
                          width={450 * imageRatio}
                          height={450}
                          alt={animal.name}
                        />
                      );
                    })}
                  </div>
                </>
              )}
          </div>
          <h1>{animal.name}</h1>

          <div className="animal-info bg-purple-200">
            {documentToReactComponents(animal.details)}
          </div>

          <div className="button-container">
            <Link
              href="/community"
              className="button bg-purple-600 text-white  hover:bg-purple-800"
            >
              ADOPT ME
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Animal;

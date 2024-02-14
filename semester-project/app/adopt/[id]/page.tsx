import { Metadata } from "next";
import Image from "next/image";
import "./styles.modules.css";
import contentfulService from "@/app/lib/contentfulClient";
import Button from "@/app/_components/Button/Button";

const metadata: Metadata = {
  title: "Story",
};

interface Params {
  id: string;
}

async function Story({ params }: { params: Params }) {
  const animal = await contentfulService.getAnimalById(params.id);

  let imageRatio = 0;
  if (animal) {
    imageRatio = animal.featuredImage.height / animal.featuredImage.width;
  }

  return (
    <>
      {animal && (
        <div className="cnt bg-purple-200">
          <div className="adoption ">
            <h1>Adoption Form</h1>
            <div className="animal-info">
              <h3>{animal.name}</h3>
              <div className="image-container">
                <Image
                  className="animal-img animal-main-img"
                  src={animal.featuredImage.url}
                  fill={true}
                  priority
                  alt={animal.name}
                />
              </div>
            </div>
            <form
              className="form-container"
              action="/submit-donation"
              method="post"
            >
              <h2>Your info:</h2>
              <label>
                Name:
                <input type="text" />
              </label>
              <br />
              <label>
                Email:
                <input type="email" />
              </label>
              <br />
              <label>
                Phone:
                <input type="tel" />
              </label>
              <br />
              <label>
                Message:
                <textarea />
              </label>
              <br />
              <div className="button">
                <Button textHolder="Adopt" href="/thankyou" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Story;

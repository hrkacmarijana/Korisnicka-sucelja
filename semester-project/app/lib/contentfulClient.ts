const getAllAnimalsQuery = `query AnimalList {
  animalCollection {
    items {
      sys {
        id
      }
      name
      description
      featuredImage {
        url
        height
        width
      }
      species
    }
  }
}`;

const getAnimalByIdQuery = `query GetAnimalById($id: String!) {
  animal(id: $id) {
    sys {
      id
    }
    name
    description
    featuredImage {
      url
      height
      width
    }
    imagesCollection {
      items {
        url
        width
        height
      }
    }
    species
    details {
      json
    }
  }
}`;

const getAllAnimalTypesQuery = `query {
  animalCollection {
    items {
      species
    }
  }
}`;

const getAllHeroSectionsQuery = `query HeroSectionList{
  heroSectionCollection {
    items {
      index
      name
      text
			buttonText
      buttonUrl
    }
  }
}`;

interface AnimalCollectionResponse {
  animalCollection: {
    items: Animal[];
  }
}

interface Animal {
  sys: {
    id: string;
  };
  name: string;
  description: string;
  featuredImage: Image;
  species: "cat" | "dog" | "other"
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface DetailAnimalResponse {
    animal: {
      sys: {
        id: string;
      };
      details: {
        json: {
          data: {};
          content: {
            data: {};
            content: {
              data: {};
              marks: {
                type: string;
              }[];
              value: string;
              nodeType: string;
            }[];
            nodeType: string;
          }[];
          nodeType: string;
        };
      };
      name: string;
      description: string;
      featuredImage: Image;
      imagesCollection?: {
        items: Image[];
      }
      species: "cat" | "dog" | "other";
    };
}

export interface TypeAnimalListItem {
  id: string;
  name: string;
  description: string;
  featuredImage: Image;
  species: "cat" | "dog" | "other";
}

interface TypeAnimalDetailItem extends TypeAnimalListItem {
  details: any;
  imagesCollection?: Image[];
}

interface AnimalTypesCollectionResponse {
  animalCollection: {
    items: AnimalTypes[]
  }
}

interface AnimalTypes {
  species: string;
}
interface HeroSection {
  index: number;
  name: string;
  text: string;
  buttonText: string
  buttonUrl: string;
}

interface  TypeHeroSectionListItem{
    index: number;
    name: string;
    text: string;
    button: {
      text: string;
      href: string;
    },
}

interface HeroSectionCollectionResponse {
  heroSectionCollection: {
    items: HeroSection[];
  }
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllAnimals = async (): Promise<TypeAnimalListItem[]>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllAnimalsQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const body = (await response.json()) as {
      data: AnimalCollectionResponse;
    };

    // Map the response to the format we want
    const animals =
      body.data.animalCollection.items.map((item) => ({
        id: item.sys.id,
        name: item.name,
        description: item.description,
        featuredImage: item.featuredImage,
        species: item.species
      }));

    return animals;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAnimalById = async (
  id: string
): Promise<TypeAnimalDetailItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        query: getAnimalByIdQuery,
        variables: { id },
      }),
    });

    const body = (await response.json()) as {
      data: DetailAnimalResponse;
    };

    const responseAnimal = body.data.animal;
  
    const animal = {
      id,
      name: responseAnimal.name,
      description: responseAnimal.description,
      featuredImage: responseAnimal.featuredImage,
      imagesCollection: responseAnimal.imagesCollection?.items,
      details: responseAnimal.details.json,
      species: responseAnimal.species
    };

    return animal;
  } catch (error) {
    console.log(error);

    return null;
  }
};

const getAllAnimalTypes = async (): Promise<AnimalTypes[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllAnimalTypesQuery }),
    });
    const body = (await response.json()) as {
      data: AnimalTypesCollectionResponse;
    };

    const animalTypes: AnimalTypes[] = body.data.animalCollection.items.map(
      (item) => ({
        species: item.species,
      })
    );

    return animalTypes;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getAllHeroSections= async (): Promise<TypeHeroSectionListItem[]>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllHeroSectionsQuery }),
    });

    const body = (await response.json()) as {
      data: HeroSectionCollectionResponse;
    };

    const heroSections =
      body.data.heroSectionCollection.items.map((item) => ({
        index: item.index,
        name: item.name,
        text: item.text,
        button: {
          text: item.buttonText,
          href: item.buttonUrl
        },
      }));

    return heroSections;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const contentfulService = {
  getAllAnimals,
  getAnimalById,
  getAllAnimalTypes,
  getAllHeroSections
};

export default contentfulService;
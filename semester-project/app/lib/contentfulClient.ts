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


//----------------------------------Story----------------------------------------

const getAllStoriesQuery = `query StoriesList {
  storiesCollection {
    items {
      sys {
        id
      }
      title
      intro
      image {
        url
        height
        width
      }
      
    }
  }
}`;

const getStoriesByIdQuery = `query GetStoriesById($id: String!) {
  stories(id: $id) {
    sys {
      id
    }
    title
    image {
      url
      height
      width
    }
    intro
  
    text {
      json
    }
  }
}`;

interface StoriesCollectionResponse {
  storiesCollection: {
    items: Story[];
  }
}

interface Story {
  sys: {
    id: string;
  };
  title: string;
  intro: string;
text: string;
  image: Image;
}


interface DetailStoriesResponse {
    stories: {
      sys: {
        id: string;
      };
      text: {
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
      title: string;
      image: Image;
      
intro: string    };
}


interface TypeStoriesDetailItem extends TypeStoriesListItem {
  text: any;
}

export interface TypeStoriesListItem {
  id: string;
  title: string;
  text: string;
  intro: string;

  image: Image;
}






const getAllStories = async (): Promise<TypeStoriesListItem[]>=> {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({ query: getAllStoriesQuery }),
    });

    // Get the response as JSON, cast as ProductCollectionResponse
    const body = (await response.json()) as {
      data: StoriesCollectionResponse;
    };

    // Map the response to the format we want
    const stories =
      body.data.storiesCollection.items.map((item) => ({
        id: item.sys.id,
        title: item.title,
        text: item.text,
        image: item.image,
        intro: item.intro
      }));

    return stories;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const getStoryById = async (
  id: string
): Promise<TypeStoriesDetailItem | null> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
      },
      body: JSON.stringify({
        query: getStoriesByIdQuery,
        variables: { id },
      }),
    });

    const body = (await response.json()) as {
      data: DetailStoriesResponse;
    };

    const responseStory = body.data.stories;
  
    const stories = {
      id,
      title: responseStory.title,
      intro: responseStory.intro,
      image: responseStory.image,
      text: responseStory.text.json,
    };

    return stories;
  } catch (error) {
    console.log(error);

    return null;
  }
};


















const contentfulService = {
  getAllAnimals,
  getAnimalById,
  getAllAnimalTypes,
  getAllStories,
  getStoryById,
};

export default contentfulService;
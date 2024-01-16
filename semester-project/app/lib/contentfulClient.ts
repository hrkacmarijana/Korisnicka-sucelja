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
}`

require('dotenv').config();


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
}`

interface AnimalCollectionResponse {
  animalCollection: {
    items: Animal[];
  }
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Animal {
  sys: {
    id: string;
  };
  name: string;
  description: string;
  species: "cat" | "dog" | "other";
  featuredImage: Image;
}

export interface TypeAnimalListItem  {
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
    const animals: TypeAnimalListItem[] =
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




const contentfulService = {
  getAllAnimals,
};

export default contentfulService;
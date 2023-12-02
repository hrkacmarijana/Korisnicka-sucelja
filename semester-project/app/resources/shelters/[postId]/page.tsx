interface Params {
  postId: string;
}

export interface ShelterPostParams {
  params: Params;
}

function ShelterPost({ params }: ShelterPostParams) {
  return (
    <main>
      <h1>Post #{params.postId}</h1>
    </main>
  );
}

export default ShelterPost;

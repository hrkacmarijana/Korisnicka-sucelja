interface Params {
  postId: string;
}

export interface CGPostParams {
  params: Params;
}

function CGPost({ params }: CGPostParams) {
  return (
    <main>
      <h1>Post #{params.postId}</h1>
    </main>
  );
}

export default CGPost;

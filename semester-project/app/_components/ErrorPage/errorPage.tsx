import { FC } from "react";

const errorPage: FC = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>We have a problem</h2>
      <button ref="/">Go Home</button>
    </div>
  );
};

export default errorPage;

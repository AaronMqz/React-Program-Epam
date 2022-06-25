import React from "react";

const Home = () => {
  return (
    <div>
      React Application Environment: {process.env.NODE_ENV.toUpperCase()}
    </div>
  );
};

export default Home;

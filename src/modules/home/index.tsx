import { HeartIcon, SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="h-screen w-scree text-gray-700 bg-gradient-to-tr from-green-100 via-purple-100 to-cyan-100 flex flex-col items-center justify-center text-2xl gap-3">
        <div className="flex gap-2 items-center justify-center">
          <SparklesIcon className="text-yellow-400 w-7" />
          <p>Hello, Happy World!</p>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;

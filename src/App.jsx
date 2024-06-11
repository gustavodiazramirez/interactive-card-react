import React from "react";
import InteractiveCard from "./components/InteractiveCard";
const App = () => {
  return (
    <>
      <div className="lg:bg-main-desktop bg-main-mobile max-w-full h-screen bg-no-repeat">
        <InteractiveCard />
      </div>
    </>
  );
};

export default App;

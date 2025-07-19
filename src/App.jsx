import React from "react";
import NavBar from "./Components/ui/NavBar";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="overflow-x-hidden h-screen bg-black font-nyghtSerif dark:text-zinc-100">
      <NavBar />
      <div className="h-screen">
        <Header />
      </div>
      <div className="h-screen">
        <Header />
      </div>
    </div>
  );
};

export default App;

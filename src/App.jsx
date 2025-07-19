import React from "react";
import NavBar from "./Components/ui/NavBar";
import Header from "./Components/Header";
import Layout from "./Layout";
import AboutMe from "./Components/AboutMe";

const App = () => {
  return (
    <Layout>
      <div className="h-screen">
        <Header />
      </div>
      <div className="h-screen">
        <AboutMe />
      </div>
    </Layout>
  );
};

export default App;

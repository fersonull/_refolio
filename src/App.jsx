import React, { useState } from "react";
import Header from "./Components/Header";
import Layout from "./Layout";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

const App = () => {


  const [active, setActive] = useState("");
  return (
    <Layout active={active}>
      <div className="h-screen">
        <Header setActive={setActive} />
      </div>
      <div className="h-screen">
        <AboutMe setActive={setActive} />
      </div>
      <div className="h-screen">
        <Projects setActive={setActive} />
      </div>
    </Layout>
  );
};

export default App;

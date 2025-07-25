import React, { useState } from "react";
import Header from "./Components/Header";
import Layout from "./Layout";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <Layout active={active}>
      <div className="h-screen">
        <Header setActive={setActive} />
      </div>
      <div className="min-h-screen">
        <AboutMe setActive={setActive} />
      </div>
      <div className="min-h-screen">
        <Projects setActive={setActive} />
      </div>
      <div className="h-screen ">
        <Skills setActive={setActive} />
      </div>
      <div className="h-screen ">
        <Contact setActive={setActive} />
      </div>
    </Layout>
  );
};

export default App;

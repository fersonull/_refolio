import React, { useState } from "react";
import NavBar from "./Components/ui/NavBar";
import Header from "./Components/Header";
import Layout from "./Layout";
import AboutMe from "./Components/AboutMe";

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
    </Layout>
  );
};

export default App;

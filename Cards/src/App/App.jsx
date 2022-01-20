import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import "./App.css";
import Main from "../components/Main/Main.jsx";
import React, { useState } from "react";

const App = () => {
  const [niz, promeniNiz] = useState([0, 0, 0]);
  const [page, promeniPage] = useState(2);

  const dodaj = () => {
    promeniNiz([...niz, 0]);
  };

  const povecaj = (index) => {
    promeniNiz(
      niz.map((e, i) => {
        if (i === index) e = e + 1;
        return e;
      })
    );
  };
  return (
    <div>
      <Header dodaj={dodaj} promeniPage={promeniPage} />
      <Main inc={povecaj} niz={niz} page={page} />

      <Footer />
    </div>
  );
};

export default App;

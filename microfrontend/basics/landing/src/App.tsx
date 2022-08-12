import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.scss";

const COMPANY_NAME = "Texada";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <header>
      <h1>
        Landing App
      </h1>
    </header>
    <Header companyName={COMPANY_NAME} />
    <Footer companyName={COMPANY_NAME} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

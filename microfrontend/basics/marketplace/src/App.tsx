import Footer from "landing/Footer";
import React from "react";
import ReactDOM from "react-dom";
import SafeComponent from "./components/SafeComponent";
import "./index.scss";

const Header = React.lazy(() => import("landing/Header"));

const COMPANY_NAME = "Texada";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <header>
      <h1>Market Place App</h1>
    </header>
    <React.Suspense fallback={<div>Header Loading ....</div>}>
      <SafeComponent>
        <Header companyName={COMPANY_NAME} />
      </SafeComponent>
    </React.Suspense>
    <Footer companyName={COMPANY_NAME} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

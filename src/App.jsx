import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import MainPageContent from "./components/MainPageContent/MainPageContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="main-page-content">
        <MainPageContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

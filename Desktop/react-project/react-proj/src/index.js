import React from "react";
import ReactDOM from "react-dom/client";
import {IndexImages,IndexImagesMobile} from "./components/index/IndexImages.jsx";
import { Header, HeaderMobile } from "./components/index/Header.jsx";
import "./styles/index.css"; 
import IndexCards from "./components/index/IndexCards.jsx";
import 'font-awesome/css/font-awesome.min.css';
import IndexContent1 from "./components/index/IndexContent1.jsx";
import IndexContent2 from "./components/index/IndexContent2.jsx";
import Footer from "./components/index/Footer.jsx";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div>
    <div id="desktop">
      <div className="grid-container">    
        <Header />
        <IndexImages />
        <IndexCards />
        <IndexContent1 />
        <IndexContent2 />
        <Footer />
      </div>
    </div>
    <div id="mobile">
      <div className="grid-container-mobile">
        <HeaderMobile />
        <IndexImagesMobile/>
        <Footer/>
      </div>
    </div>
  </div>
);
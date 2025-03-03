import React from "react";
import "../styles/index.module.css"; 
import {IndexImages,IndexImagesMobile} from "../components/index/IndexImages.jsx";
import { Header, HeaderMobile } from "../components/index/Header.jsx";
import 'font-awesome/css/font-awesome.min.css';
import IndexCards from "../components/index/IndexCards.jsx";
import IndexContent1 from "../components/index/IndexContent1.jsx";
import IndexContent2 from "../components/index/IndexContent2.jsx";
import Footer from "../components/index/Footer.jsx";

export default function Home(){
    return (
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
}
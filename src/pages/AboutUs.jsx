import React from "react";
import styles from "../styles/aboutus.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { FaAngleRight } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import img1 from "../assets/img/about-us/wmremove-transformed.jpeg";
import img2 from "../assets/img/about-us/spacejoy-IH7wPsjwomc-unsplash.jpg";
import img3 from "../assets/img/about-us/spacejoy-YqFz7UMm8qE-unsplash.jpg";

function AboutUs(){
  const navigate = useNavigate();

  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.collectionsGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemPath}>
            <span
              id={styles.span1}
              onClick={() => navigate("/")}
            >
              Home
          </span>
            <span id={styles.span2}><FaAngleRight/></span>
            <span id={styles.span3}>About us</span>
          </div>
          <div className={styles.gridItemContent}>
              <div className={styles.titleBox}>
                <h1>About us</h1>
                <p>Urban Dén is a women-led, homegrown brand committed to crafting unique, playfully designed, and high-quality products. Our creations celebrate creativity, handcrafted artistry, and joyous living. Inspired by the beauty in everyday life, we strive to offer colorful and innovative products that bring joy and style to your home.</p>
              </div>
              <div className={styles.imagesBox}>
                <div className={styles.img1}>
                  <img src={img2}/> 
                </div>
                <div className={styles.img2}>
                  <img src={img3}/>
                </div>
                <div className={styles.img3}>
                  <img src={img1}/>
                  <div className={styles.img3Text}>
                    <p style={{marginTop:"20px"}}>Our founder:<br/><p style={{fontWeight:"900"}}>Nova orion</p></p>
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.gridItemFooter}>
              <Footer/>
          </div>
        </div>
      </div>  
      <div id={styles.mobile}>

      </div>
    </div>
  );
}

export default AboutUs;

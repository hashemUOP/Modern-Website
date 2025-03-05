import React from "react";
import styles from "../styles/productdetails.module.css";
import {Header} from "../components/index/Header.jsx";
import Footer from "../components/index/Footer.jsx";
import Images from "../components/product-details/Images.jsx";
import SmallImages from "../components/product-details/SmallImages.jsx";
import Details from "../components/product-details/Details.jsx";

export default function ProductDetails(){
    return (
        <div>
      <div id={styles.desktop}>
        <div className={styles.collectionsGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemBigImages}>
            <Images/>
          </div>
          <div className={styles.gridItemSmallImages}>
            <SmallImages/>
          </div>
          <div className={styles.gridItemDetails}>
            <Details/>
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
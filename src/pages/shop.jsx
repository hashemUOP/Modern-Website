import React from "react";
import styles from "../styles/shop.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";


function Shop(){
  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.shopGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemContent}>
            <div className={styles.gridVerBoxes}>
                <div className={styles.vBox1}>
                    <p>hashem</p>
                </div>
                <div className={styles.vBox2}>
                    <p>hashdaasd</p>
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

export default Shop;

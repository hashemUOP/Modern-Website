import React from "react";
import styles from "../styles/cart.module.css";
import {Header} from "../components/index/Header.jsx";
import Footer from "../components/index/Footer.jsx";
import Content from "../components/cart/Content.jsx";


export default function Cart(){
    return (
        <div>
      <div id={styles.desktop}>
        <div className={styles.cartGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemContent}>
            <Content/>
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
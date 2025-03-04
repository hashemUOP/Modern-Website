import React from "react";
import styles from "../styles/collections.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import Cat from "../components/collections/Cat";
import Paginator from "../components/collections/Paginator";
import Cards from "../components/collections/Cards";

function Collections(){
  return (
    <div>
      <div id={styles.desktop}>
        <div className={styles.collectionsGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemCat}>
            <Cat/>
          </div>
          <div className={styles.gridItemCards}>
            <Cards/>
          </div>
          <div className={styles.gridItemPaginator}>
            <Paginator/>
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

export default Collections;

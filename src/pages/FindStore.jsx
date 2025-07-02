import React from "react";
import styles from "../styles/findstore.module.css";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { FaAngleRight } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

function FindStore(){
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
            <span id={styles.span3}>Find Store</span>
          </div>
          <div className={styles.gridItemContent}>
              <div className={styles.contentBox1}>
                <div className={styles.box1Menu}>
                  <h1 style={{marginTop:"50px"}}>Find Us</h1>
                  <p style={{marginTop:"10px",fontSize:"0.8dvw"}}>Discover timeless comfort and modern elegance at our furniture store, where quality craftsmanship meets stylish design. Find the perfect pieces to transform your space today.</p>
                </div>
                
              </div>
              <div className={styles.contentBox2}>
                <div className={styles.box2Content}>
                  <div className={styles.box2Left}>

                  </div>
                  <div className={styles.box2Right}>

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

export default FindStore;

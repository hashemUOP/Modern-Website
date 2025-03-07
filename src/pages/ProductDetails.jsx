import React from "react";
import styles from "../styles/productdetails.module.css";
import {Header} from "../components/index/Header.jsx";
import Footer from "../components/index/Footer.jsx";
import Images from "../components/product-details/Images.jsx";
import SmallImages from "../components/product-details/SmallImages.jsx";
import Details from "../components/product-details/Details.jsx";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";


export default function ProductDetails(){
    return (
        <div>
      <div id={styles.desktop}>
        <div className={styles.collectionsGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemPath}>
            <Path/>
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

function Path(){
  return (
    <div style={{display:"flex",width:"100%",marginLeft:"150px"}}>
      <Link to= "/">
        <span style={{color:"gray"}}>Home</span>
      </Link>
      <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}}/>
      <Link to="/collections">
        <span style={{marginLeft:"10px",color:"gray"}}>Bedroom furniture</span>
      </Link>
      <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}} />
      <span style={{marginLeft:"10px",fontWeight:"600"}}>Italian vintage cabinet</span>
    </div>
  );
}
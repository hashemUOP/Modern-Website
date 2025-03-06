import React from "react";
import styles from "../styles/checkout.module.css";
import {Header} from "../components/index/Header.jsx";
import Footer from "../components/index/Footer.jsx";
import CheckOutContent from "../components/cart/CheckOutContent.jsx";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


export default function CheckOut(){
    return (
        <div>
      <div id={styles.desktop}>
        <div className={styles.cartGridContainer}>
          <div className={styles.gridItemHeader}>
            <Header/>
          </div>
          <div className={styles.gridItemPath}>
            <Path/>
          </div>
          <div className={styles.gridItemContent}>
            <CheckOutContent/>
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
    return(
        <>
        <Link to= "/cart">
          <span style={{color:"gray"}}>Cart</span>
        </Link>
        
            <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}}/>
            <span style={{marginLeft:"10px",fontWeight:"600"}}>Checkout</span>
            <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}} />
            <span style={{marginLeft:"10px",color:"gray"}}>Payment</span>
        </>
    );
}
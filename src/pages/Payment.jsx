import React from "react";
import styles from "../styles/payment.module.css";
import {Header} from "../components/index/Header.jsx";
import Footer from "../components/index/Footer.jsx";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import PaymentContent from "../components/cart/PaymentContent.jsx";


export default function Payment(){
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
              <PaymentContent/>
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


export function Path(){
    return(
        <>
        <Link to= "/cart" style={{all:"unset",cursor:"pointer"}}>
          <span style={{color:"gray"}}>Cart</span>
        </Link>
        
        <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}}/>
        <Link to="/check-out" style={{all:"unset",cursor:"pointer"}}>
            <span style={{marginLeft:"10px",color:"gray"}}>Checkout</span>
        </Link>
        <MdArrowForwardIos style={{marginLeft:"10px",color:"gray"}} />
        <span style={{marginLeft:"10px",fontWeight:"600"}}>Payment</span>
        </>
    );
}
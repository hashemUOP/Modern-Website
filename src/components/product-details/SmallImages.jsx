import React from "react";
import styles from "../../styles/productdetails.module.css";
import pic from "../../assets/img/81dfKK-q0AL.jpg";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";


export default function(){
    return (
        <>
            <div className={styles.smallImgsRow}>
                <button style={{backgroundColor:"black",borderRadius:"10px",height:"40%",width:"2.5em",marginRight:"10%"}}>
                    <FaArrowLeft color="white"/>
                </button>
                <div className={styles.smallImgContainer}>
                    <img src={pic} className={styles.cardSmallImgs}/>
                </div>
                <div className={styles.smallImgContainer} style={{marginRight:"10px",marginLeft:"20px"}}>
                    <img src={pic} className={styles.cardSmallImgs}/>
                </div>
                <div className={styles.smallImgContainer}>
                    <img src={pic} className={styles.cardSmallImgs} style={{filter: "blur(0.7px)  opacity(0.8)"}}/>
                </div>
                <button style={{backgroundColor:"black",borderRadius:"10px",height:"40%",width:"2.5em",marginLeft:"10%"}}>
                    <FaArrowRight color="white"/>
                </button>
            </div>
        </>
    );
}
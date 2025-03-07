import React from "react";
import styles from "../../styles/productdetails.module.css";
import pic from "../../assets/img/81dfKK-q0AL.jpg";

export default function Images(){
    return (
        <>
            <div className={styles.bigImgsContainer}>
                <img 
                    src={pic} 
                    className={styles.bigImg} 
                    style={{ opacity: 0.6 }} 
                />
                <img 
                    src={pic} 
                    className={styles.bigImg} 
                    style={{ marginLeft: "2%", opacity: 1 }} 
                />
                <img 
                    src={pic} 
                    className={styles.bigImg} 
                    style={{ marginLeft: "2%", opacity: 0.6 }}
                />
            </div>
        </>
    );
}

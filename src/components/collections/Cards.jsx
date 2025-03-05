import React from "react";
import styles from "../../styles/collections.module.css";
import Card from "./Card";


export default function(){
    return (
        <>
            <div className={styles.cardsContainer}>
                <div style={{display:"flex",height:"50%",width:"100%",justifyContent:"space-evenly"}}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div style={{display:"flex",height:"50%",width:"100%",justifyContent:"space-evenly"}}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    );
}
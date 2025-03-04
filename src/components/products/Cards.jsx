import React from "react";
import styles from "../../styles/collections.module.css";
import Card from "./Card";


export default function(){
    return (
        <>
            <div className={styles.cardsContainer}>
                <Card/>
            </div>
        </>
    );
}
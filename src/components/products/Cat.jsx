import React from "react";
import pic from "../../assets/img/81dfKK-q0AL.jpg";
import styles from "../../styles/collections.module.css";
import arrowDown from '../../assets/icons/Iconsax/Iconsax/Svg/Category/Arrow/vuesax/outline/arrow-down-1.svg';


export default function Cat() {
    return (
        <>
            <div className={styles.catRow}> 
                <div className={styles.catImgDiv}>
                    <img src={pic} className={styles.catImg} />
                </div>
                <span style={{marginLeft:"2%",fontWeight:"bold"}}>Category</span>
                <span style={{marginLeft:"auto"}}>
                    Sort by
                    <img src={arrowDown} />
                </span>
                <span style={{marginLeft:"2%"}}>
                    0 products
                </span>
            </div>
        </>
    );
}
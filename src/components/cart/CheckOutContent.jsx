import React from "react";
import styles from "../../styles/checkout.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function CheckOutContent(){
    return (
        <>
            <div className={styles.gridItemContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentLeft}>
                        <div className={styles.row1L}>
                            <span>Select shipping country</span>
                        </div>
                        <DropDownMenu/>
                    </div>
                    <div className={styles.contentRight}>

                    </div>
                </div>
            </div>
        </>
    );
}

function DropDownMenu(){
    return (
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" className={styles.customButton}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span>Select country</span>
                    <MdOutlineKeyboardArrowDown size={24} />
                </div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width:"90%"}}>
                <li><a class="dropdown-item" href="#">Action 1</a></li>
                <li><a class="dropdown-item" href="#">Action 2</a></li>
                <li><a class="dropdown-item" href="#">Action 3</a></li>
            </ul>
            </div>
    );
}
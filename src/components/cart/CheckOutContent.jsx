import React from "react";
import styles from "../../styles/checkout.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function CheckOutContent(){
    return (
        <>
            <div className={styles.gridItemContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentLeft}>
                        <div className={styles.row1L} style={{marginTop:"20px"}}>
                            <span>Select shipping country</span>
                        </div>
                        <DropDownMenu/>
                        <hr style={{marginLeft:"4%",marginRight:"5%"}}/>
                        <div className={styles.row2L}>
                            <span>Shipping address</span>
                        </div>
                        <div className={styles.row1L} style={{marginTop:"10px"}}>
                            <span>Full name*</span>
                        </div>
                        <form style={{width:"95%",marginLeft:"15px"}}>
                            <input type="text" className={styles.fullNameForm} placeholder="Enter your full name"></input>
                        </form>
                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"1%"}}>
                                <div className={styles.row1L} style={{marginTop:"1px"}}>
                                    <span>Email address*</span>
                                </div>
                                <form style={{width:"95%",marginLeft:"15px"}}>
                                    <input type="text" className={styles.fullNameForm} placeholder="Enter your email address"></input>
                                </form>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",width:"50%",marginRight:"4%"}}>
                                <div className={styles.row1L} style={{marginTop:"1px"}}>
                                    <span>Confirmation email*</span>
                                </div>
                                <form style={{width:"95%",marginLeft:"15px"}}>
                                    <input type="text" className={styles.fullNameForm} placeholder="Enter your email confirmation"></input>
                                </form>
                            </div>
                        </div>
                        <CustomForm text={"Phone number*"} textHolder={"Enter your phone number"}/>
                        <CustomForm text={"Full house address*"} textHolder={"Enter your full home address"}/>
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

function CustomForm({text,textHolder}){
    return(
        <>
        <div className={styles.row1L} style={{marginTop:"10px"}}>
            <span>{text}</span>
        </div>
        <form style={{width:"95%",marginLeft:"15px"}}>
            <input type="text" className={styles.fullNameForm} placeholder={textHolder}></input>
        </form>
        </>
    );
}
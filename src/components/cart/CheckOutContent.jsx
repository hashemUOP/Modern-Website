import React from "react";
import styles from "../../styles/checkout.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import img from "../../assets/img/81dfKK-q0AL.jpg";
import { useNavigate } from "react-router-dom";

export default function CheckOutContent(){
    return (
        <>
            <div className={styles.gridItemContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentLeft}>
                        <div className={styles.row1L} style={{marginTop:"20px"}}>
                            <span>Select shipping country</span>
                        </div>
                        <DropDownMenu text={"Select country"}/>
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
                        <div style={{display:"flex",}}>
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
                        <CustomForm text={"Phone number*"} textHolder={"Enter your phone number"} marginT={"10px"}/>
                        <CustomForm text={"Full home address*"} textHolder={"Enter your full home address"}/>
                        <div style={{display:"flex",alignItems:"center",width:"100%"}}>
                            <div style={{width:"50%",marginLeft:"8px"}}>
                                <CustomForm text={"City*"} textHolder={"City"}/>   
                            </div>
                            <div style={{width:"50%",marginRight:"15px"}}>
                                <DropDownMenu text={"Select Region"}/>    
                            </div>
                        </div>
                        <CustomForm text={"Postal code*"} textHolder={"Enter your postal code"}/>
                    </div>
                    <div className={styles.contentRight}>
                        <span style={{marginLeft:"20px",fontWeight:"bold",marginTop:"20px",marginBottom:"20px"}}>Your order</span>
                        <div style={{display:"flex",marginLeft:"20px",justifyContent:"space-between",width:"90%"}}>
                            <div style={{display:"flex"}}>
                                <div className={styles.orderImgContainer}>
                                    <img src={img} style={{width:"100%",height:"100%"}} />
                                </div>
                                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",marginLeft:"10px"}}>
                                    <span style={{fontWeight:"bold"}}>Cashier Leather...</span>
                                    <span style={{color:"grey"}}>Grey</span>
                                    <span style={{fontWeight:"bold"}}>x1</span>
                                </div>
                            </div>
                            <span style={{fontWeight:"bold",justifySelf:"flex-end",}}>$2500.00</span>
                        </div>   
                        <div style={{ width: "91%",marginLeft:"20px"}}>
                            <hr />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",width:"100%"}}>
                            <span style={{fontWeight:"bold",marginLeft:"22px",marginTop:"5px"}}>Discount Code</span>
                            <div style={{display:"flex",width:"100%",alignItems:"center"}}>
                                <div style={{width:"80%"}}>
                                    <CustomForm textHolder={"Add discount code"}/>   
                                </div>
                                <div style={{width:"20%",marginRight:"15px"}}>
                                    <button className={styles.orderButton}>Apply</button>
                                </div>
                            </div>
                        </div> 
                        <div style={{display:"flex",width:"100%"}}>
                            <span style={{fontWeight:"bold",fontSize:"13px",marginLeft:"22px"}}>New customer?</span>
                            <span style={{textDecoration:"underline",fontWeight:"300",fontSize:"13px",marginLeft:"5px",cursor:"pointer"}}>Sign up</span>
                            <span style={{fontWeight:"300",fontSize:"13px",marginLeft:"5px"}}>to get better offers</span>
                        </div>  
                        <div style={{ width: "91%",marginLeft:"20px"}}>
                            <hr />
                        </div>     
                        <SeperateText textLeft={"Subtotal"} textRight={"$2500.00"} isOne/>
                        <SeperateText textLeft={"Discount"} textRight={"-$0.00"} />
                        <SeperateText textLeft={"Shipment cost"} textRight={"$22.50"} />
                        <div style={{ width: "91%",marginLeft:"20px"}}>
                            <hr />
                        </div>  
                        <SeperateText textLeft={"Grandtotal"} textRight={"$2522.50"} isOne isLast/>
                        <RedirectButton/>
                    </div>
                </div>
            </div>
        </>
    );
}

function DropDownMenu({text}){
    return (
            <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" className={styles.customButton}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span>{text}</span>
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

export function CustomForm({text,textHolder,marginT,isPay}){
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <div className={styles.row1L} style={{marginTop:marginT}}>
                <span>{text}</span>
            </div>
            <form style={{width:isPay?"100%":"95%",marginLeft: isPay?"0px":"15px",marginBottom:"15px"}}>
                <input type="text" className={styles.fullNameForm} placeholder={textHolder}></input>
            </form>   
        </div>
        
    );
}
export function SeperateText({textRight,textLeft,isOne,isLast}){
    return (
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{color:isLast? "black":"gray",fontWeight:isLast?"bold":"500",marginLeft:"22px"}}>{textLeft}</span>
            <span style={{color:isOne? "black" : "grey",fontWeight:"600",marginRight:"22px"}}>{textRight}</span>
        </div>
    );
}

function RedirectButton(){
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/payment");
  };
    return (
        <div style={{width:"100%",marginTop:"20px"}}>
            <button 
            onClick={handleButtonClick}
            style={{backgroundColor:"black",color:"white",width:"90%",height:"50px",borderRadius:"10px"

            }}>
                Continue to payment
            </button>
        </div>
    )
}
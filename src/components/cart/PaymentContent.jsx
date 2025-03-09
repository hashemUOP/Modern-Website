import React from "react";
import img from "../../assets/img/81dfKK-q0AL.jpg";
import styles from "../../styles/payment.module.css";
import "../../styles/customAccordion.scss";
import { CustomForm,SeperateText } from "./CheckOutContent";
import { useNavigate } from "react-router-dom";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa6";
import { BsCashStack } from "react-icons/bs";



const payMethodsUniqueAccordionIDs = new Map([
    ["credit-card", "0000001"],
    ["paypal", "0000002"],
    ["stripe", "0000003"],
    ["cash", "0000004"]
  ]);
  

export default function PaymentContetnt(){
    return (
        <>
            <div className={styles.gridItemContent}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentLeft}>
                      <span style={{marginLeft:"22px",marginTop:"20px",textAlign:"left",fontWeight:"bold",marginBottom:"15px"}}>Select payment method</span>  
                        <div style={{width:"95%",marginLeft:"20px",marginBottom:"30px"}}>
                            <CustomAccordion 
                                            tileTitle={"Credit card"}
                                            icon ={
                                                <div style={{display:"inline-flex",marginLeft:"20px"}}>
                                                    <RiVisaLine size={30}/>
                                                    <div style={{width:"10px"}}></div>
                                                    <RiMastercardFill size={30}/>
                                                </div>
                                            }
                                            uniqueAccordionID={payMethodsUniqueAccordionIDs.get("credit-card")}
                            />
                        </div>
                        <div style={{width:"95%",marginLeft:"20px",marginBottom:"30px"}}>
                            <CustomAccordion 
                                tileTitle={"Paypal"}
                                icon ={
                                    <FaCcPaypal size={37}/>
                                }
                                uniqueAccordionID={payMethodsUniqueAccordionIDs.get("paypal")}
                            />
                        </div>
                        <div style={{width:"95%",marginLeft:"20px",marginBottom:"30px"}}>
                            <CustomAccordion 
                                tileTitle={"Stripe"}
                                icon={
                                    <FaStripe size={37}/>
                                }
                                uniqueAccordionID={payMethodsUniqueAccordionIDs.get("stripe")}
                            />
                        </div>
                        <div style={{width:"95%",marginLeft:"20px",marginBottom:"30px"}}>
                            <CustomAccordion
                                isCash
                                tileTitle={"Cash on delivery"}
                                icon={
                                    <BsCashStack size={30}/>
                                }
                                uniqueAccordionID={payMethodsUniqueAccordionIDs.get("cash")}
                            />
                        </div>
                        <div style={{ display: "flex", width: "100%", marginLeft: "25px", alignItems: "center",marginBottom:"20px"}}>
                          <label style={{ display: "flex", alignItems: "center", gap: "10px",fontWeight:"bold" }}>
                            <input type="checkbox" style={{ width: "20px", height: "20px" }} />
                            <span>Save my information for future checkout</span>
                          </label>
                        </div>
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
function RedirectButton(){
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/payment");
    };
      return (
          <div style={{width:"100%",marginTop:"15px"}}>
              <button 
              onClick={handleButtonClick}
              style={{backgroundColor:"black",color:"white",width:"90%",height:"50px",borderRadius:"10px"
  
              }}>
                  Confirm payment
              </button>
          </div>
      )
  }
  function CustomAccordion({ tileTitle, icon ,isCash,uniqueAccordionID}) {
  
    return (
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading-${uniqueAccordionID}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${uniqueAccordionID}`} //unique collapse target
              aria-expanded="true"
              aria-controls={`collapse-${uniqueAccordionID}`} // unique control
              disabled={isCash} // disable the accordion buttonif isCash is true
            >
              <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <label style={{ fontWeight: "bold", display: "flex" }}>
                  <input
                    type="radio" 
                    style={{ marginRight: "10px", width: "20px", height: "20px" }}
                  />
                  <div>{tileTitle}</div>
                </label>
                {icon}
              </div>
            </button>
          </h2>
          <div
            id={`collapse-${uniqueAccordionID}`} // unique collapse ID
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${uniqueAccordionID}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <CustomForm isPay textHolder={"Card number"} />
              <CustomForm isPay textHolder={"Name on card"} />
              <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <div style={{ width: "50%", marginLeft: "7px" }}>
                  <CustomForm textHolder={"Expiration date  (MM/YY)"} isPay />
                </div>
                <div style={{ width: "50%", marginRight: "7px" }}>
                  <CustomForm textHolder={"CVV"} isPay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
import React from "react";
import pic from "../../assets/img/81dfKK-q0AL.jpg";
import { IoMdEye } from "react-icons/io";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import styles from "../../styles/collections.module.css";


export default function Card(){
    return (
        <>
            <div className={styles.cardContainer}>
                <button className={styles.cardArrowsIcon}>
                    <CgArrowsExchangeAlt size={25} color="#71797E" />
                </button>
                <button className={styles.inStock}>
                    In stock
                </button>
                <img src={pic} className={styles.cardImg}/>
                <div className={styles.cardColumn}>
                    <div style={{display:"flex",marginTop:"4%",fontSize:"80%",fontWeight:"600"}}>
                        <span style={{marginLeft:"10px"}}>shopID202120121</span>
                        <span  style={{marginLeft:"auto",marginRight:"10px"}}>save $35</span>
                    </div>
                    <p style={{fontWeight:"900",textAlign:"left",marginLeft:"10px",marginBottom:"0px",marginTop:"4%",fontSize:"90%"}}>
                        Product Full Name
                    </p>
                    <div style={{display:"inline",textAlign:"left",marginTop:"4%",fontSize:"80%",fontWeight:"600"}}>
                        <span style={{marginLeft:"10px"}}>new price $890</span>
                        <span style={{textDecoration: "line-through" ,marginLeft:"10px",fontSize:"75%"}}>Old Price $925</span>    
                    </div>
                    <div style={{display:"flex",width:"100%",height:"25%",marginTop:"2%",fontSize:"80%"}}>
                        <div className={styles.smallImgContainer}>
                            <img src={pic} className={styles.cardSmallImgs}/>
                        </div>
                        <div className={styles.smallImgContainer}>
                            <img src={pic} className={styles.cardSmallImgs}/>
                        </div>
                        <div className={styles.smallImgContainer}>
                            <img src={pic} className={styles.cardSmallImgs} style={{filter: "blur(0.7px)  opacity(0.8)"}}/>
                        </div>
                        <span style={{alignSelf:"center",marginLeft:"10px",fontWeight:"bold",color:"#71797E"}}>+3</span>

                    </div>
                    <div style={{display:"flex",marginTop:"auto",width:"100%",height:"50px",marginBottom:"10px"}}>
                        <button style={{width:"80%",border:"none",backgroundColor:"black",borderRadius:"15px",color:"white",marginLeft:"5%",fontSize:"80%"}}>
                            Add to cart 
                        </button>
                        <button style={{width:"50px",backgroundColor:"white",borderRadius:"50%",height:"50px",marginLeft:"5px",marginRight:"10px"}}>
                            <IoMdEye size={22}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

const MyIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width="15"
        height="15"
        className="text-gray-600"
        style={{ transform: "scale(0.95)" }} 
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    );
  };
  
  
  
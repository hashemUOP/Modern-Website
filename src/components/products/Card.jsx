import React from "react";
import pic from "../../assets/img/81dfKK-q0AL.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft,faEye } from "@fortawesome/free-solid-svg-icons"; 

export default function Card(){
    return (
        <>
            <div style={{height:"calc(100%/2.4)",width:"calc(100%/3.5)",backgroundColor:"beige",display:"flex",flexDirection:"column",borderRadius:"15px",position:"relative"}}>
                <button style={{width:"40px",height:"40px",borderRadius:"5px",position:"absolute",top:"15px",right:"15px",backgroundColor:"white",border:"1px solid grey"}}>
                    <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{color:"grey"}}/>
                </button>
                <button style={{borderTopRightRadius:"35px",borderBottomRightRadius:"35px",position:"absolute",top:"15px",width:"70px",height:"40px",fontSize:"10px",borderLeft:"none"}}>In stock</button>
                <img src={pic} style={{width:"100%",height:"50%",objectFit:"cover",overflow:"hidden",borderRadius:"inherit"}}/>
                <div style={{display:"flex",flexDirection:"column",height:"50%",width:"100%"}}>
                    <div style={{display:"flex"}}>
                        <span>shopID202120121</span>
                        <span  style={{marginLeft:"auto"}}>save 35$</span>
                    </div>
                    <p style={{fontWeight:"bold",textAlign:"left"}}>
                        Product Full Name
                    </p>
                    <div style={{display:"inline",textAlign:"left"}}>
                        <span>new price 890$</span>
                        <span style={{textDecoration: "line-through"}}>Old Price 925$</span>    
                    </div>
                    <div style={{display:"flex",marginTop:"auto",width:"80%",height:"80px"}}>
                        <button style={{width:"70%"}}>
                            
                        </button>
                        <button style={{width:"30%",backgroundColor:"white",borderRadius:"50%"}}>
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
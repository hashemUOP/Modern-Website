import React from "react";
import img404 from "../assets/img/404/istockphoto-1020978766-612x612.jpg";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden", 
      }}
    >
      <div className="row h-100 m-0">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 h-100 p-0">
          <img
            src={img404}
            alt="404"
            style={{ height: "100%", width: "100%", objectFit: "cover",overflow:"hidden", imageResolution:"revert"}}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-6 h-100 p-0 align-content-center justify-content-center">
          <div className="d-flex flex-column justify-content-around align-self-center">
            <p style={{fontWeight:"bold",fontSize:"40px"}}>
                404
            </p>
            <p>Page not found</p>
            <p style={{padding:"0px 2%",fontSize:"80%"}}>It looks like the page you’re trying to reach doesn’t exist.</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button 
                    style={{borderRadius:"20px",border:"none",padding:"10px 40px",marginRight:"10px"}}
                    onClick={()=>window.location.reload}
                >
                    Retry
                </button>
                <Link to = "/">
                    <button style={{borderRadius:"20px",border:"none",padding:"10px 30px",backgroundColor:"black",color:"white"}}>
                    Homepage  
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../../styles/productdetails.module.css";
import { FiShare2 } from "react-icons/fi";
import { CgArrowsExchangeAlt } from "react-icons/cg";

export default function Details() {
  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCol1}>
          <div className={styles.detailsCol1Item1}>
            <span style={{ fontWeight: "bold", marginLeft: "20px" }}>
              Save more:{" "}
            </span>
            <span>Get 5% off for every 100 you spend!</span>
          </div>
          <h6>Italian Vintage Cabinet</h6>
          <p>sun store</p>
          <p>
            Upgrade your space with the elegant Italian Marble Vintage Display
            Cabinet. Made with premium Italian marble, this cabinet adds touch
            of sophistication to any room. Display your treasures in style while
            also enjoying the durability and quality of this unique piece.
            Elevate your home decor today.
          </p>
          <div style={{height:"150px",width:"93%",backgroundColor:"#f8f8f8",marginLeft:"15px",borderRadius:"8px"}}>

          </div>
        </div>
        <div className={styles.detailsCol2}>
          <div className={styles.detailsCol2Item1}>
            <div className={styles.detailsCol2Item1Row1}>
              <button>In stock</button>
              <button style={{ marginLeft: "10px" }}>save 20%</button>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "auto",
                marginLeft: "auto",
                marginRight: "50px",
              }}
            >
              <button
                style={{
                  height: "60%",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  borderColor: "lightgray",
                  marginLeft: "10%",
                }}
              >
                <FiShare2 size={27} color="#71797E" />
              </button>
              <button
                style={{
                  height: "60%",
                  marginLeft: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  borderColor: "lightgray",
                }}
              >
                <CgArrowsExchangeAlt size={27} color="#71797E" />
              </button>
            </div>
          </div>
          <p
            style={{
              textAlign: "start",
              margin: "0px",
              marginLeft: "30px",
              marginTop: "20px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            Price:
          </p>
          <div style={{ display: "inline-flex" }}>
            <span
              style={{
                textAlign: "start",
                marginLeft: "30px",
                fontWeight: "bold",
                fontSize: "120%",
              }}
            >
              $280.00
            </span>
            <span
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontWeight: "bold",
                textDecoration: "line-through",
                fontSize: "70%",
                alignSelf: "center",
                color: "grey",
              }}
            >
              $300.00
            </span>
          </div>
          <hr color="lightgray" />
          <p style={{ marginLeft: "30px", textAlign: "left" }}>
            Product Quantity:
          </p>
          <div style={{display:"flex"}}>
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "60px",
              border: "2px solid lightgrey",
              borderRadius: "8px",
              marginLeft: "30px",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <button
              style={{
                height: "75%",
                backgroundColor: "grey",
                width: "20%",
                alignSelf: "center",
                marginLeft:"10px",
                border:"none",
                borderRadius:"8px",
                color:"white",
                fontSize:"150%"
              }}
            >
              -
            </button>
            <span style={{ fontWeight: "bold", alignSelf: "center" }}>1</span>
            <button
                style={{
                    height: "75%",
                    backgroundColor: "black",
                    width: "20%",
                    alignSelf: "center",
                    marginRight:"10px",
                    border:"none",
                    borderRadius:"8px",
                    color:"white",
                    fontSize:"120%"
                }}
            >
                +
            </button>
            
            </div>
            <span style={{alignSelf:"center",fontSize:"70%",fontWeight:"bold",marginLeft:"10px",color:"grey"}}>Subtotal: $280.00</span>
          </div>
            <button
            style={{
                height:"60px",
            width:"50%",
            marginTop:"20px",
            marginLeft:"30px",
            backgroundColor:"black",
            borderRadius:"10px",
            color:"white",
            }}
            >Add to cart</button>
           <button
            style={{
                height:"60px",
            width:"50%",
            marginTop:"20px",
            marginLeft:"30px",
            backgroundColor:"lightgrey",
            borderRadius:"10px",
            color:"white",
            border:"none"
            }}
          >
            Add to favorites
          </button> 
          </div>
      </div>
    </>
  );
}

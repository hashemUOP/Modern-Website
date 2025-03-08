import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from "../../styles/cart.module.css";
import img from "../../assets/img/81dfKK-q0AL.jpg";

export default function Content() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentRight}>
        <div className={styles.contentRightItem1}>
          <span style={{ fontWeight: "bold", fontSize: "170%" }}>Cart</span>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <FaRegTrashCan style={{ marginRight: "5px" }} />
            <span>remove</span>
          </div>
        </div>
        <div className={styles.contentRightItem2}>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <Checkbox name="Product" />
          </div>
          <span>Quantity</span>
          <span>Price</span>
        </div>
        {/* Add Item components as needed */}
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        
      </div>
      <div className={styles.contentLeft}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            color: "grey",
            fontSize: "100%",
          }}
        >
          <span style={{ marginLeft: "3%", fontWeight: "400" }}>Subtotal</span>
          <span style={{ color: "#36454F", marginRight: "3%", fontWeight: "bold" }}>
            $2500.00
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            color: "grey",
            fontSize: "100%",
          }}
        >
          <span style={{ marginLeft: "3%", fontWeight: "400" }}>Discount</span>
          <span style={{ color: "#36454F", marginRight: "3%", fontWeight: "bold" }}>
            $0.00
          </span>
        </div>
        <hr style={{ borderColor: "grey" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            color: "grey",
            fontSize: "100%",
          }}
        >
          <span style={{ marginLeft: "3%", fontWeight: "400" }}>Grand total</span>
          <span style={{ color: "#36454F", marginRight: "3%", fontWeight: "bold" }}>
            $2500.00
          </span>
        </div>
        <ButtonRedirect />
      </div>
    </div>
  );
}

export function Checkbox({ name }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return (
    <label style={{ alignSelf: "center" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        style={{ transform: "scale(1.5)", margin: "15px" }}
      />
      {name}
    </label>
  );
}

function Button() {
  const [counter, setCounter] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        width: "130px",
        height: "45px",
        border: "2px solid lightgrey",
        borderRadius: "8px",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "10px",
      }}
    >
      <button
        onClick={() => {
          if (counter > 1) setCounter(counter - 1);
        }}
        style={{
          height: "30px",
          backgroundColor: "grey",
          width: "30px",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "150%",
          marginLeft:"10px",
        }}
      >
        -
      </button>
      <span style={{ fontWeight: "bold", alignSelf: "center" }}>{counter}</span>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{
          height: "30px",
          backgroundColor: "black",
          width: "30px",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "120%",
          marginRight:"10px"
        }}
      >
        +
      </button>
    </div>
  );
}

function Item() {
  return (
    <div className={styles.contentRightItem3}>
      <div className={styles.contentRightItem3Row1}>
        <div style={{ width: "calc(100%/2.4)", display: "flex", alignItems: "center" }}>
          <Checkbox />
          <div className={styles.productImg}>
            <img src={img} alt="product" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p>Cardigan</p>
            <p>Green M</p>
          </div>
        </div>
        <div
          style={{
            width: "calc(100%/3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft:"10px"
          }}
        >
          <Button />
        </div>
        <div
          style={{
            width: "calc(100%/3)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <span>$2500.00</span>
        </div>
      </div>
    </div>
  );
}

function ButtonRedirect() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/check-out");
  };
  return (
    <button
      onClick={handleButtonClick}
      style={{
        width: "90%",
        borderRadius: "8px",
        backgroundColor: "black",
        color: "white",
        marginLeft: "5%",
        height: "50px",
        marginTop: "30px",
      }}
    >
      Checkout now
    </button>
  );
}

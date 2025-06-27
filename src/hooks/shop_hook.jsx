import React, { useState,useRef } from "react";
import styles from "../styles/shop.module.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
function TapText() {
  const [active, setActive] = useState("Room"); // default is 'Room'

  const handleTap = (label) => {
    setActive(label);
  };

  const items = ["Room", "Style", "Season", "Furniture Type", "Theme", "Launch or Trend"];


  return (
    <div className={styles.listSpan}>
      {items.map((label) => (
        <span
          key={label}
          onClick={() => handleTap(label)}
          style={{
            color: active === label ? "black" : "#a9a9a9",
            textDecorationLine: active=== label?"underline":"none",
            textUnderlineOffset: active=== label?"7px":"0px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function TapList() {

    const ITEM_WIDTH = 200;
    const data = [
        {id:"Room",},
        {id:"Style"},
        {id:"Season"},
        {id:"Furniture Type"},
        {id:"Theme"},
        {id:"Launch or Trend"},
    ];
    const SAMPLE_DATA=[
    {id:"01",color:"#014f5e"},
    {id:"02",color:"#014f5e"},
    {id:"03",color:"#014f5e"},
    {id:"04",color:"#014f5e"},
    {id:"05",color:"#014f5e"},
    {id:"06",color:"#014f5e"},
    ];

    const [show, setShow] = useState(false);

    const containerRef = useRef();

    //function to handle scrolling when the button is clicked
     const handleScroll = (scrollAmount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
    return(
        <div className={styles.Container}>
            <div ref={containerRef} style={{
                width:"99vw",
                overflowX:"scroll",
                scrollBehavior:"smooth",
                justifySelf:"center",
                scrollbarWidth:"none",
                position:"absolute"
            }}>
                <div className={styles.content_box}>
                    {SAMPLE_DATA.map((item) => (
                        <div className={styles.card} style={{backgroundColor:item.color}}>
                            <p>{item.id}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={()=>{handleScroll(ITEM_WIDTH); setShow(true)}} className={`${styles.leftButton} ${styles.button}`}><FaChevronRight /></button>
            {show && <button onClick={()=>{handleScroll(-ITEM_WIDTH)}} className={`${styles.rightButton} ${styles.button}`}><FaChevronLeft /></button>}
            
        </div>
    );
}
export  {TapText,TapList};

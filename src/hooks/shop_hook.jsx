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

    const SAMPLE_DATA=[
    {id:"01",color:"#014f5e"},
    {id:"02",color:"#014f5e"},
    {id:"03",color:"#014f5e"},
    {id:"04",color:"#014f5e"},
    {id:"05",color:"#014f5e"},
    {id:"06",color:"#014f5e"},
    ];
    const [scrollPosition,setScrollPosition] = useState(0);
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
                width:"900px",
                overflowX:"scroll",
                scrollBehavior:"smooth",

            }}>
                <div className={styles.content_box}>
                    {SAMPLE_DATA.map((item) => (
                        <div className={styles.card} style={{backgroundColor:item.color}}>
                            <p>{item.id}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.action_btns}>
                <button onClick={()=>{handleScroll(ITEM_WIDTH)}}><FaChevronRight /></button>
                <button onClick={()=>{handleScroll(-ITEM_WIDTH)}}><FaChevronLeft /></button>
            </div>
        </div>
    );
}
export  {TapText,TapList};

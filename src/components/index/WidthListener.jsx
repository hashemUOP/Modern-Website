import React, { useState, useEffect } from 'react';

const ScreenWidthDisplay = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          /* The pseudo-element displays the screen width */
          body::before {
            content: "Screen Width: ${screenWidth}px";
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 8px;
            border-radius: 4px;
            font-family: sans-serif;
            font-size: 14px;
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
};

export default ScreenWidthDisplay;

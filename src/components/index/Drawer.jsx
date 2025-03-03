import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Drawer({ onClose }) {
  return (
    <div className="offcanvas offcanvas-start show" style={{ visibility: "visible" }}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Drawer Title</h5>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p>Drawer content goes here.</p>
      </div>
    </div>
  );
}
export default Drawer;

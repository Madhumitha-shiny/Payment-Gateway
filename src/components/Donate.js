import React, { useState } from "react";

const Donate = () => {
  const [display, setDisplay] = useState(false);
  const openWindow = () => {
    setDisplay(!display);
  };
  return (
    <div className="row donate text-center p-5">
      
      {display && (
        <div className="rounded-1 col-lg-12 col-md-12">
          <iframe
            src="https://pages.razorpay.com/pl_JhLev0LBJlfLxB/view"
            width={"35%"}
            height={500}
          ></iframe>
        </div>
      )}
      {!display ? <div className="col-lg-12 col-md-12">
        <button className="btn btn-light" onClick={openWindow}>
          <h4 style={{fontWeight:'bold'}}>Donate Now</h4>
          <p>Secured by Razorpay</p>
        </button>
      </div> :
      <div className="col-lg-12 col-md-12 mb-5">
        <button className="btn btn-light" onClick={openWindow}>
          <h4 style={{fontWeight:'bold'}}>Cancel</h4>
        </button>
      </div>
      }
      
    </div>
  );
};

export default Donate;

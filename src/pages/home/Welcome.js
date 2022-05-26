import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import resort from "../../images/resort.png";
import mint from "../../images/mint-button.png";

const Welcome = () => {
  return (
    <>
      <div className="container-fluid welcome py-5 my-lg-5">
        <div className="col-lg-9 col-10 mx-auto pt-5 mt-5">
          <div className="row mx-auto py-lg-5 my-lg-5 justify-content-center">
            <div className="col-lg-6  d-flex flex-column justify-content-center">
              <h1 className="text-white pb-3">
                Welcome to <br />
                <span className="fw-bold text-warning">Crypto Resorts</span>
              </h1>
              <p className="text-white ps-md-3 ps-2 border-4 border-start border-warning border-start-4 border-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="pt-3 btn-ss d-flex gap-4 align-items-center">
                <a href="" className="btn btn-warning text-white px-5">
                  Explore
                </a>
                <a href="" className="text-decoration-none text-white">
                  Mint{" "}
                  <span className="ms-2 animated-icon">
                    <img src={mint} alt="" />
                  </span>
                </a>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${resort})`,
              }}
              className="col-lg-6  d-flex align-items-center justify-content-center snow-animation animated"
            >
              {/* <img src={snow} className="img-fluid animated" alt="" />
              <img src={snow} className="img-fluid animated" alt="" />
              <img src={snow} className="img-fluid animated" alt="" />
              <img src={snow} className="img-fluid animated" alt="" /> */}
              <div className="snowflake">
              ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
  <div className="snowflake">
  ●
  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

import React from "react";
import CircleButtons from "./CircleButtons";
import BrandButtons from "./BrandButtons";
import SplitButtons from "./SplitButton";
const ButtonComp = () => {
  return (
    <div className="container">
      <h2>Button </h2>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Circle Buttons
                </h6>
              </div>
              <CircleButtons> </CircleButtons>
            </div>
          </div>
          <div className="col-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Brand Buttons
                </h6>
              </div>
              <BrandButtons></BrandButtons>
            </div>
          </div>
        </div>
        <div>
          <div className>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Brand Buttons
              </h6>
            </div>
            <SplitButtons></SplitButtons>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ButtonComp;

import React from "react";
import CustomText from "./colorCard/CustomText";
import Gradient from "./colorCard/Gradient";
import Graysacle from "./colorCard/Grayscale";
const ColorComp = () => {
  return (
    <div className="container">
      <h2>Color Utilities</h2>
      <p>
        Bootstrap's default utility classes can be found on the official link
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row">
        <div className="col-lg-4">
          <CustomText></CustomText>
        </div>

        <div className="col-lg-4">
          <Gradient></Gradient>
        </div>

        <div className="col-lg-4">
          <Graysacle></Graysacle>
        </div>
      </div>
    </div>
  );
};
export default ColorComp;

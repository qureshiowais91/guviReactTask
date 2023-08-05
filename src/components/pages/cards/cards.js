import React from "react";
import SmallCard from "./smallCard";
import DefaultCard from "./cardExmaple/DefaultCard"
import DropdownCardExample from "./cardExmaple/DropdownCard"
import BasicCard from "./cardExmaple/BasicCard"
import CollabsableCard from "./cardExmaple/collapsable"
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SmallCard
            title={"EARNINGS (MONTHLY)"}
            price={"$40,000 "}
          ></SmallCard>
        </div>
        <div className="col-3">
          <SmallCard
            title={"EARNINGS (MONTHLY)"}
            price={"$40,000 "}
          ></SmallCard>
        </div>
        <div className="col-3">
          <SmallCard
            title={"EARNINGS (MONTHLY)"}
            price={"$40,000 "}
          ></SmallCard>
        </div>
        <div className="col-3">
          <SmallCard
            title={"EARNINGS (MONTHLY)"}
            price={"$40,000 "}
          ></SmallCard>
        </div>
      </div>

      <div className="mt-5 row">
        <div className="col-6">
          <DefaultCard></DefaultCard>
        </div>
        <div className="col-6">
           <DropdownCardExample></DropdownCardExample>
        </div>
        <div className="col-6">
          <BasicCard></BasicCard>
        </div>
        <div className="col-6">
           <CollabsableCard></CollabsableCard>
        </div>
      </div>
    </div>
  );
};
export default Card;

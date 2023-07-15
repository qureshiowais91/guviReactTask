import PricingCard from "./PricingCard";

function PricingCardList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>

        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>

        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
      </div>{" "}
      <div className="row">
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>

        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
        <div className="col-sm">
          <PricingCard></PricingCard>
        </div>
      </div>
    </div>
  );
}

export default PricingCardList;

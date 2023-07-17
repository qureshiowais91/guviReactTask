import PricingCard from "./PricingCard";

function PricingCardList(props) {
  // console.log(pros)
  return (
    <div className="container">
      <div className="row">
        {props.data.map((item, index) => (
          <div className="col-sm" key={index}>
            <PricingCard data={item}  addtoCart={props.addtoCart} identify={index} ></PricingCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCardList;

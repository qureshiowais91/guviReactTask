import PricingCard from "./PricingCard.js";

function CardList() {
  const pricingInfo = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Monthly Status Reports",
    },
    {
      title: "STANDARD",
      price: "$9.99/month",
      user: "Up to 5 Users",
      storage: "25GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusReports: "Weekly Status Reports",
    },
    {
      title: "PREMIUM",
      price: "$19.99/month",
      user: "Up to 10 Users",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      communityAccess: "Community Access",
      privateProjects: "Unlimited Private Projects",
      phoneSupport: "Dedicated Phone Support",
      subdomain: "Custom Subdomain",
      statusReports: "Daily Status Reports",
    },
  ];


  return (
    <section className="pricing py-5">
      <div className="row ">
        {pricingInfo.map((details) => (
          <PricingCard details={details} />
        ))}
      </div>
    </section>
  );
}

export default CardList;

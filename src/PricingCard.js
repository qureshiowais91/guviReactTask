
function  PricingCard({ details }){
    const {
      title,
      price,
      user,
      storage,
      publicProjects,
      communityAccess,
      privateProjects,
      phoneSupport,
      subdomain,
      statusReports,
    } = details;
return (
  <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {title}
        </h5>
        <h6 className="card-price text-center">
          {price}
          <span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            <strong>{user} Users</strong>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {storage} Storage
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {publicProjects} Public Projects
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {communityAccess} Community Access
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {privateProjects} Private Projects
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {phoneSupport} Phone Support
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            {subdomain} Subdomain
          </li>
          {statusReports ? (
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Monthly Status Reports
            </li>
          ) : (
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times"></i>
              </span>
              Monthly Status Reports
            </li>
          )}
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default PricingCard;

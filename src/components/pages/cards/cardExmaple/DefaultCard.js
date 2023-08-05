import React from 'react';

const DefaultCard = () => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="">Default Card Example</h6>
      </div>
      <div className="card-body">
        The styling for this basic card example is created by using default Bootstrap
        utility classes. By using utility classes, the style of the card component can be
        easily modified with no need for any custom CSS!
      </div>
    </div>
  );
};

export default DefaultCard;

import React, { useState } from 'react';

function Specialoffer() {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '20px',
        backgroundColor: '#F1E5C4', // Light background color to make it stand out
        zIndex: 1050,
      }}
    >
      <div
        className="card text-center shadow-lg border-0 rounded-4 bg-warning-subtle"
        style={{
          maxWidth: '600px',
          width: '95%',
          margin: '0 auto',
          maxHeight: '90vh',
          overflow: 'auto',
        }}
      >
        <div className="card-body p-5">
          <h2 className="card-title text-danger fw-bold">🎉 Special Offer Alert! 🎉</h2>
          <p className="card-text fs-5 mt-3">
            Enjoy <strong>Buy 1 Get 1 Free</strong> on all{' '}
            <span className="text-primary">Ideal Ice Cream</span> varieties this week only!
          </p>
          <p className="text-muted">
            Offer valid till: <strong>Sunday, 24th April</strong>
          </p>

          <button
            className="btn btn-danger px-4 py-2 mt-3"
            onClick={handleToggleDetails}
          >
            {showDetails ? 'Hide Details' : 'Grab This Offer'}
          </button>

          {showDetails && (
            <div className="mt-4 text-start bg-light p-4 rounded">
              <h5 className="fw-bold mb-3">🍦 Offer Details:</h5>
              <div className="row g-4">
                <div className="col-md-6">
                  <img
                    src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt3f555c029f6d5e66/679164e781dcb151cd60b98d/facts-about-ice-cream-ice-cream-sundae.jpeg?q=70&width=3840&auto=webp"
                    alt="Ice Cream Offer"
                    className="img-fluid rounded shadow-sm"
                  />
                  <ul className="mt-3">
                    <li>Single & Double Scoop eligible</li>
                    <li>Minimum order ₹200</li>
                    <li>Valid from 8th - 14th April 2025</li>
                    <li>No other coupons can be applied</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-success fw-semibold mb-2">🔥 More Offers:</h6>
                  <ul>
                    <li><strong>₹50 OFF</strong> on first online order</li>
                    <li><strong>Free toppings</strong> every Friday!</li>
                    <li><strong>10% cashback</strong> via UPI payments</li>
                  </ul>
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2023/10/Pistachio-tiramisu-6d3d0da.jpg"
                    alt="Dessert Offers"
                    className="img-fluid rounded shadow-sm mt-3"
                  />
                </div>
              </div>
              <p className="text-center text-success mt-4 fw-semibold">
                🍨 Don't miss out—visit your nearest Ideal outlet or order online today!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Specialoffer;

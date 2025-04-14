import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Testimonial() {
  // Actual review data with ice cream-inspired colors
  const testimonials = [
    {
      quote: "This ice cream is absolutely amazing! Every scoop feels like a burst of happiness. The flavors are innovative and simply delightful.",
      author: "Emily C.",
      position: "Ice Cream Enthusiast",
      bgColor: "#ffccd5", // Pastel Pink
      textColor: "#333"
    },
    {
      quote: "A perfect blend of sweetness and creaminess. I've never tasted anything so refreshingly delicious. It's like a little piece of summer in every bite!",
      author: "Jacob R.",
      position: "Food Critic",
      bgColor: "#cceeff", // Pastel Light Blue
      textColor: "#333"
    },
    {
      quote: "Every time I try a new flavor, I'm transported to an ice cream wonderland. The texture, the taste, the creativity—simply irresistible!",
      author: "Sophia L.",
      position: "Dessert Lover",
      bgColor: "#ccffcc", // Pastel Mint Green
      textColor: "#333"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div 
        id="testimonialCarousel" 
        className="carousel slide" 
        data-bs-ride="carousel"
        data-bs-interval="4000" // 4-second interval for better reading time
      >
        <div className="carousel-inner">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="d-flex flex-column align-items-center">
                <div 
                  className="card shadow mb-3" 
                  style={{
                    width: '75%',
                    backgroundColor: item.bgColor,
                    color: item.textColor,
                    border: 'none',
                    borderRadius: '1rem'
                  }}
                >
                  <div className="card-body">
                    <p className="card-text fst-italic">"{item.quote}"</p>
                    <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
                    <div className="mt-3">
                      <h5 className="card-title mb-0">{item.author}</h5>
                      <small className="text-muted">{item.position}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#testimonialCarousel" 
          data-bs-slide="prev"
        >
          <span 
            className="carousel-control-prev-icon" 
            aria-hidden="true"
            style={{ filter: 'brightness(0.8)' }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#testimonialCarousel" 
          data-bs-slide="next"
        >
          <span 
            className="carousel-control-next-icon" 
            aria-hidden="true"
            style={{ filter: 'brightness(0.8)' }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

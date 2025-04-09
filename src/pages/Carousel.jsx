import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        id="icecreamCarousel"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="3000"  // Autoplay: slide interval set to 3 seconds
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#icecreamCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#icecreamCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#icecreamCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.HzPgeGUo7Fudn34wX1k51gHaHa&pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="Award-Winning Vanilla Dream"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Award-Winning Vanilla Dream</h5>
              <p>
                Our classic Vanilla Dream has been crowned the best traditional ice cream
                with its luxuriously rich flavor and velvety texture. Crafted with the highest
                quality ingredients, each bite promises a melt-in-your-mouth experience that will
                leave you yearning for more.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1600x500?text=Chocolate+Paradise"
              className="d-block w-100"
              alt="Award-Winning Chocolate Paradise"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Award-Winning Chocolate Paradise</h5>
              <p>
                Dive into decadence with our Chocolate Paradise—a symphony of bold, bittersweet
                Belgian chocolate fused with a luscious fudge ganache. This irresistible delight has
                charmed critics and chocolate lovers alike, setting a new standard for indulgence.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1600x500?text=Strawberry+Bliss"
              className="d-block w-100"
              alt="Award-Winning Strawberry Bliss"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Award-Winning Strawberry Bliss</h5>
              <p>
                Savor the exquisite taste of Strawberry Bliss, made with sun-ripened strawberries
                and a smooth, creamy base. This delightfully tangy treat has earned rave reviews from
                ice cream aficionados worldwide, making every scoop a burst of summery refreshment.
              </p>
            </div>
          </div>
        </div>

        {/* Previous and Next Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#icecreamCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#icecreamCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

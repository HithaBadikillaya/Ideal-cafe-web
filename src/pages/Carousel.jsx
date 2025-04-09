import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
  return (
    <div
      id="icecreamCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
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
            src="https://via.placeholder.com/800x400?text=Vanilla+Dream"
            className="d-block w-100"
            alt="Award-Winning Vanilla Dream"
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Award-Winning Vanilla Dream</h5>
            <p>
              Our classic Vanilla Dream has been crowned the best traditional
              ice cream with its rich flavor and smooth texture.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400?text=Chocolate+Paradise"
            className="d-block w-100"
            alt="Award-Winning Chocolate Paradise"
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Chocolate Paradise</h5>
            <p>
              Dive into decadence with Chocolate Paradise – a rich, award-winning
              concoction for true chocolate lovers.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400?text=Strawberry+Bliss"
            className="d-block w-100"
            alt="Award-Winning Strawberry Bliss"
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
            <h5>Strawberry Bliss</h5>
            <p>
              Enjoy the refreshing taste of Strawberry Bliss, our tangy and
              smooth ice cream that’s won hearts around the world.
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
  );
}

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
        data-bs-interval="3000"
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

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img
                src="/images/icecream1.png"
                className="img-fluid d-block"
                alt="Award-Winning Vanilla Dream"
                style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="text-center mt-3">
              <h5>Vanilla Dream</h5>
              <p>
                Our classic Vanilla Dream has been crowned the best traditional ice cream with its
                luxuriously rich flavor and velvety texture.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img
                src="/images/icecream2.jpg"
                className="img-fluid d-block"
                alt="Butterscotch Paradise"
                style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="text-center mt-3">
              <h5>Bella Camdy</h5>
              <p>
                Dive into decadence with our candy Paradise—a symphony of bold, bittersweet
                Belgian candy fused with a luscious fudge ganache.
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img
                src="/images/awards.png"
                className="img-fluid d-block"
                alt="Award-Winning Strawberry Bliss"
                style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
            <div className="text-center mt-3">
              <h5>Achievements</h5>
              <p>
                Our ice creams have won numerous awards for their exceptional taste and quality,
                including the prestigious Golden Scoop Award for Best Ice Cream in 2023.
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: 'brightness(0.5)' }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#icecreamCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: 'brightness(0.5)' }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

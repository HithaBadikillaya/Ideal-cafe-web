import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      <style>{`
        .about-wrapper {
          background: linear-gradient(to bottom right, #ffecd2, #fcb69f);
          padding-top: 130px;
          padding-bottom: 100px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-content {
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .about-title {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 3rem;
          color: #d35400;
          margin-bottom: 60px;
        }

        .about-heading {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e67e22;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4a4a4a;
          margin-bottom: 15px;
        }

        .about-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          margin: 20px auto;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }

          .about-heading {
            font-size: 1.4rem;
          }

          .about-image {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>

      <AppNavbar cartCount={3} />

      <div className="about-wrapper">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>

          {/* Founder Section */}
          <Image
            src="https://www.idealicecream.com/wp-content/uploads/2018/02/s-prabhakar-kamath.jpg"
            alt="S. Prabhakar Kamath"
            className="about-image"
          />
          <h2 className="about-heading">Founder: S. Prabhakar Kamath</h2>
          <p className="about-text">
            The saga of Ideal Ice Cream began in the early seventies with the establishment of Ideal’s in the
            heart of Mangalore by visionary entrepreneur <strong>S. Prabhakar Kamath</strong>.
          </p>
          <p className="about-text">
            Starting with 14 flavors in 1975, he built Ideal into a brand known for exceptional quality,
            innovation, and beloved taste, making Mangaluru the Ice Cream capital of India.
          </p>

          {/* CMD Section */}
          <Image
            src="https://www.idealicecream.com/wp-content/uploads/2023/02/ideal-icecream-mukund-kamath.jpg"
            alt="S. Mukund Kamath"
            className="about-image"
          />
          <h2 className="about-heading">CMD: S. Mukund Kamath</h2>
          <p className="about-text">
            Under the dynamic leadership of <strong>S. Mukund Kamath</strong>, Ideal Ice Cream has grown
            into a celebrated brand with over 150 products and 4500+ retailers across Karnataka, Kerala, and Goa.
          </p>
          <p className="about-text">
            His excellence has earned Ideal 27 awards at the Great Indian Ice Cream Contest, solidifying
            its place as a national icon.
          </p>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
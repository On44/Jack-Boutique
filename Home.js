import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Prime Boutique</h1>
        <p>Your one-stop shop for the finest fashion and accessories.</p>
      </header>
      <section className="home-content">
        <div className="home-feature">
          <h2>New Arrivals</h2>
          <p>Check out our latest collection of fashion and accessories.</p>
        </div>
        <div className="home-feature">
          <h2>Featured Products</h2>
          <p>Discover our curated selection of top-selling products.</p>
        </div>
        <div className="home-feature">
          <h2>Exclusive Offers</h2>
          <p>Don't miss our special deals and discounts.</p>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 Prime Boutique. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

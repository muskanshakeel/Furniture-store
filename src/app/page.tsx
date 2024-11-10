// pages/page.tsx
'use client'

import Image from 'next/image';
import './globals.css';
import Homepage from '../../public/homepg.webp';
import Sofa from '../../public/Modern-sofa.webp';
import Dining from '../../public/dining.webp';
import Chair from '../../public/off-chair.webp';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <Image
          src={Homepage}
          alt="Furniture Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="hero-content">
          <h1>Welcome to Furniture Store</h1>
          <p><b>{`Explore our collection of stylish and comfortable furniture!`}</b></p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
  {/* Our Products Heading */}
  <h2 className="products-heading">Our Products</h2>

  {/* Product Cards */}
  <div className="product-container">
    <div className="product-card">
      <Image
        src={Sofa}
        alt="Modern Sofa"
        width={500}
        height={300}
      />
      <h3>Modern Sofa</h3>
      <p>{`$499`}</p>
    </div>
    <div className="product-card">
      <Image
        src={Dining}
        alt="Wooden Dining Table"
        width={500}
        height={300}
      />
      <h3>Wooden Dining Table</h3>
      <p>{`$699`}</p>
    </div>
    <div className="product-card">
      <Image
        src={Chair}
        alt="Office Chair"
        width={500}
        height={300}
      />
      <h3>Office Chair</h3>
      <p>{`$199`}</p>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Furniture Store</p>
      </footer>
    </div>
  );
}

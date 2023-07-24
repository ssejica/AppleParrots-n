import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import promo from "./images/promo-image.jpg";
import item1 from "./images/item1.jpg";
import item5 from "./images/item5.png";
import item8 from "./images/item8.png";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      &gt;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      &lt;
    </div>
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  

  return (
    <div className="home">
      <h1>  </h1>
      <h1 className="welcome-message">Welcome to AppleParrots!</h1>
      <div className="promo-image">
        <img src={promo} alt="promo-image" />
      </div>
      <div className="featured-items">
        <h2 className="featured-items-heading">Featured Items</h2>
        <Slider {...settings}>
          <div className="featured-item">
            <img src={item1} alt="Item1" />
            <h3>Parrot Yellow Shirt</h3>
            <p className="item-price">$30</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="featured-item">
            <img src={item5} alt="Item5" />
            <h3>Parrot Keyboard</h3>
            <p className="item-price">$30</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="featured-item">
            <img src={item8} alt="Item8" />
            <h3>Parrot Beanie</h3>
            <p className="item-price">$25</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./Shop.css";
import item1 from "./images/item1.jpg";
import item2 from "./images/item2.jpg";
import item3 from "./images/item3.jpg";
import item4 from "./images/item4.png";
import item5 from "./images/item5.png";
import item6 from "./images/item6.jpg";
import item7 from "./images/item7.png";
import item8 from "./images/item8.png";
import Modal from './Modal';
import Cart from './Cart';

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [showApparel, setShowApparel] = useState(true);
  const [showGamingAccessories, setShowGamingAccessories] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const items = [
    {
      id: 1,
      name: "Parrot Yellow Shirt",
      image: item1,
      description: "Show your vibrant support for Apple Parrots with a stylish and comfortable shirt for everyday wear.",
      price: 30,
      category: "apparel",
    },
    {
      id: 2,
      name: "Parrot Pink Shirt",
      image: item2,
      description: "Elegant and trendy pink shirt for any AppleParrot for any occasion.",
      price: 30,
      category: "apparel",
    },
    {
      id: 3,
      name: "Parrot Blue Shirt",
      image: item3,
      description: "A cool and casual blue AppleParrot shirt perfect for summer.",
      price: 30,
      category: "apparel",
    },
    {
      id: 4,
      name: "Parrot Mouse",
      image: item4,
      description: "A high-quality mouse for gaming enthusiasts.",
      price: 35,
      category: "gaming-accessories",
    },
    {
      id: 5,
      name: "Parrot Keyboard",
      image: item5,
      description: "Mechanical keyboard with customizable RGB lighting.",
      price: 30,
      category: "gaming-accessories",
    },
    {
      id: 6,
      name: "Parrot Mousepad",
      image: item6,
      description: "A premium mousepad designed for precision and comfort for crisp AppleParrot gameplay.",
      price: 20,
      category: "gaming-accessories",
    },
    {
      id: 7,
      name: "Parrot Shorts",
      image: item7,
      description: "Parrots and Apples out! Comfortable shorts for a casual and active lifestyle.",
      price: 30,
      category: "apparel",
    },
    {
      id: 8,
      name: "Parrot Beanie",
      image: item8,
      description: "Show your AppleParrot spirit by staying warm with this cozy and stylish beanie.",
      price: 25,
      category: "apparel",
    },
  ];
  const handleAddToCart = (item) => {
    const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingCartItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const handleChangeQuantity = (itemId, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleCloseCart = () => {  
    setShowCart(false);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortType === "priceLowToHigh") {
      return a.price - b.price;
    }
    if (sortType === "priceHighToLow") {
      return b.price - a.price;
    }
    return items;
  });

  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    ((showApparel && item.category === "apparel") ||
     (showGamingAccessories && item.category === "gaming-accessories"))
  );
  const handleItemClick = (item) => {  
    setSelectedItem(item);
  };

  const handleCloseModal = () => {  
    setSelectedItem(null);
  };


  return (
    <div className="shop">
      <h1 className="shop-heading">Shop</h1>
      <select
        className="sort-by"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="priceLowToHigh">Price Low to High</option>
        <option value="priceHighToLow">Price High to Low</option>
      </select>
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filters">
        <label>
          <input
            type="checkbox"
            checked={showApparel}
            onChange={() => setShowApparel(!showApparel)}
          />
          Apparel
        </label>
        <label>
          <input
            type="checkbox"
            checked={showGamingAccessories}
            onChange={() => setShowGamingAccessories(!showGamingAccessories)}
          />
          Gaming Accessories
        </label>
      </div>
      <button className="cart-button" onClick={() => setShowCart(true)}>View Cart</button>

      <div className="items-container">
        {filteredItems.map((item) => (
          <div className="item" key={item.id} onClick={() => handleItemClick(item)}> {/* New line - handle item click */}
            <img src={item.image} alt={item.name} />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-price">${item.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} onAddToCart={handleAddToCart} />}
      {showCart && <Cart items={cart} onClose={handleCloseCart} onRemove={handleRemoveFromCart} onChangeQuantity={handleChangeQuantity} />}
    </div>
  );
}

export default Shop;
import React from 'react';
import './Modal.css';

const Modal = ({ item, onClose, onAddToCart }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={item.image} className="modal-image" alt={item.name} />
                <h2 className="modal-title">{item.name}</h2>
                <p className="modal-description">{item.description}</p>
                <p className="modal-price">${item.price}</p>
                <button onClick={() => onAddToCart(item)} className="add-to-cart">Add to Cart</button>
                <button onClick={onClose} className="modal-close-button">Close</button>
            </div>
        </div>
    );
};

export default Modal;

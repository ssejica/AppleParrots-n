import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ items, onClose, onRemove, onChangeQuantity }) => {
    const [sameBillingShipping, setSameBillingShipping] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        address: '',
        creditCardNumber: '',
        cvc: '',
    });

    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
    });

    const handleBillingChange = (e) => {
        setBillingDetails({
            ...billingDetails,
            [e.target.name]: e.target.value,
        });

        if (sameBillingShipping) {
            setShippingDetails({
                ...shippingDetails,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleShippingChange = (e) => {
        if(!sameBillingShipping) {
            setShippingDetails({
                ...shippingDetails,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSameBillingShipping = (e) => {
        setSameBillingShipping(e.target.checked);
        if (e.target.checked) {
            setShippingDetails(billingDetails);
        } else {
            setShippingDetails({
                name: '',
                address: '',
            });
        }
    };

    const handleConfirmOrder = () => {
        alert("Order confirmed! A confirmation email has been sent. Your order number is " + Math.floor(Math.random() * 100000));
        onClose();
    };

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-content" onClick={e => e.stopPropagation()}>
                <h2 className="cart-title">Your Cart</h2>
                {items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} className="cart-item-image" alt={item.name} />
                        <div>
                          <h3 className="cart-item-name">{item.name}</h3>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                            <p className="cart-item-price">${item.price}</p>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => onChangeQuantity(item.id, e.target.value)}
                                className="cart-item-quantity"
                            />
                            <button onClick={() => onRemove(item.id)} className="remove-from-cart">Remove</button>
                          </div>
                        </div>
                    </div>
                ))}
                <div className="billing-shipping-details">
                    <h3>Billing Details</h3>
                    <form>
                        <input type="text" name="name" value={billingDetails.name} onChange={handleBillingChange} placeholder="Name" />
                        <input type="text" name="address" value={billingDetails.address} onChange={handleBillingChange} placeholder="Address" />
                        <input type="text" name="creditCardNumber" value={billingDetails.creditCardNumber} onChange={handleBillingChange} placeholder="Credit Card Number" />
                        <input type="text" name="cvc" value={billingDetails.cvc} onChange={handleBillingChange} placeholder="CVC" />
                    </form>
                    <h3>Shipping Details</h3>
                    <label>
                        <input type="checkbox" checked={sameBillingShipping} onChange={handleSameBillingShipping} />
                        Same as billing
                    </label>
                    <form>
                        <input type="text" name="name" value={shippingDetails.name} onChange={handleShippingChange} placeholder="Name" />
                        <input type="text" name="address" value={shippingDetails.address} onChange={handleShippingChange} placeholder="Address" />
                    </form>
                </div>
                <button onClick={handleConfirmOrder} className="confirm-order">Confirm Order</button>
                <button onClick={onClose} className="cart-close-button">Close</button>
            </div>
        </div>
    );
}

export default Cart;

import React from "react";

const CartItem = ({ id, itemName, itemUnitPrice, itemQuantity, itemTotalPrice, increaseCall, decreaseCall, removeCall }) => {
    return (
        <div key={id} className="cart-item">
            <div className="cart-item-details">
                <h3 className="cart-item-name">Pizza {itemName}</h3>
                <p className="cart-item-price">Precio Unitario: {itemUnitPrice} CLP</p>
                <p className="cart-item-quantity">Cantidad: {itemQuantity}</p>
                <p className="cart-item-price">Precio Total {itemName}: $ {itemTotalPrice} CLP</p>
            </div>
            <div className="cart-item-button-group">
                <button onClick={decreaseCall}>-</button>
                <button onClick={increaseCall}>+</button>
                <button onClick={removeCall}>🚫</button>
            </div>
        </div>
    );
};

export default CartItem;

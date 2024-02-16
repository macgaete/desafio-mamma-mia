import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const PizzaCard = ({ name, description, ingredients, price, img }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handlePizzaDetailedView = () => {
        navigate(`/pizza/${name}`);
    };

    return (
        <div className="pizza-card">
            <img className="pizza-card-pic" src={img}></img>
            <h2>{name}</h2>
            <p className="pizza-card-ingredients">Ingredientes: {ingredients}</p>
            <p>Precio: {price} CLP</p>
            <div className="pizza-card-button-container">
                <button className="pizza-card-button" onClick={handlePizzaDetailedView}>Ver más detalles</button>
                <button className="pizza-card-button" onClick={() => addToCart({ name, description, price })}>Agregar al Carro</button>
            </div>
        </div>
    );
};

export default PizzaCard;

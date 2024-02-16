import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import NotAPizza from "./NotAPizza";

const PizzaDetails = () => {
    const { pizzaVarieties, addToCart } = useCart();
    const { id } = useParams();

    const pizza = pizzaVarieties.find((pizza) => pizza.name === id);

    if (!pizza) {
        return <NotAPizza wrongPizzaName={id} />;
    }

    const { name, description, price, ingredients, img } = pizza;

    return (
        <div className="pizza-details">
            <div className="pizza-detail-card">
                <img className="pizza-detail-pic" src={img}/>
                <div className="pizza-detail-card-text">
                    <div>
                        <h2>{name}</h2>                
                        <p>{description}</p>
                        <p>Ingredientes:</p>
                        <p>{ingredients}</p>
                    </div>
                    <div>
                        <p>Precio: {price} CLP</p>
                        <button className="pizza-card-button" onClick={() => addToCart({ name, description, price })}>Agregar al Carro</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaDetails;

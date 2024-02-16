import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
    const { cart, addToCart, decreaseFromCart, removeFromCart } = useCart();

    const increaseItem = (pizza) => {
        addToCart(pizza);
    };

    const decreaseItem = (pizza) => {
        decreaseFromCart(pizza);
    };

    const removeItem = (pizza) => {
        removeFromCart(pizza);
    }

    const calculatePizzaTotal = (pizza) => {
        return pizza.price * pizza.quantity;
    };

    const totalCartPrice = cart.reduce((total, pizza) => {
        return total + calculatePizzaTotal(pizza);
    }, 0);

    return (
    <div className="baseCenter">
        <h1>Mamma Mia!</h1>
        <h2>Carrito 🛒</h2>
        <br></br>
        {cart.length === 0 ? (
        <p>No hay pizzas en el carrito. Visita nuestro <a href='/pizza'>menu</a> para ver que te podemos ofrecer!</p>
        ) : (
        <div>
            <div className="cart-items">
            {
                cart.map((pizza, index) => (
                    <>
                        <CartItem 
                            id={index}
                            itemName={pizza.name}
                            itemUnitPrice={pizza.price}
                            itemQuantity={pizza.quantity}
                            itemTotalPrice={calculatePizzaTotal(pizza)}
                            increaseCall={() => increaseItem(pizza)}
                            decreaseCall={() => decreaseItem(pizza)}
                            removeCall={() => removeItem(pizza)}
                        />
                    </>
                ))
            }
            <h2>Total Pedido: ${totalCartPrice}</h2>
            </div>
        </div>
        )}
    </div>
    );
};

export default Cart;

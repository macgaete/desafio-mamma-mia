import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    cart: [],
    pizzaVarieties: [
        { 
            name: "Napolitana", 
            description: "La vieja y confiable napolitana, nada le gana... Pero el resto de nuestro menu le hace el peso.", 
            ingredients: "Salsa de tomate, mozzarella, anchoas, aceitunas, orégano", 
            price: 8990,
            img: "https://mandolina.co/wp-content/uploads/2023/08/pizza-napolitana-1080x550-1.png"
        },
        { 
            name: "Española",  
            description: "Por si Italia no te parece tan bella como España, para gustos sabores!", 
            ingredients: "Salsa de tomate, mozzarella, chorizo, pimientos, cebolla", 
            price: 9590,
            img: "https://static.wixstatic.com/media/9bb94f_07b8332e2a464aceb4d7225dc744f5e3~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9bb94f_07b8332e2a464aceb4d7225dc744f5e3~mv2.jpg"
        },
        { 
            name: "Quattro Stagioni", 
            description: "Para los que disfrutan de Vivaldi en todo momento del año.", 
            ingredients: "Salsa de tomate, mozzarella, jamón, champiñones, alcachofas, aceitunas", 
            price: 9990,
            img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A7B9D1B2-20CE-4D60-B18D-77D8E09F847A/Derivates/349C6F0F-E5E5-4327-9892-930DE2D8E89F.jpg"
        },
        { 
            name: "Margarita", 
            description: "La madre de todas las pizzas! Molto grazie, mamma nostra!", 
            ingredients: "Salsa de tomate, mozzarella, albahaca", 
            price: 7990,
            img: "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format"
        }
    ]
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ONE_TO_CART":
            const existingPizzaIndex = state.cart.findIndex(item => item.name === action.payload.name);

            if (existingPizzaIndex !== -1) {
                const updatedCartPlusOne = state.cart.map((item, index) => {
                    if (index === existingPizzaIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return { ...state, cart: updatedCartPlusOne };
            } else {
                const pizzaToAdd = state.pizzaVarieties.find(pizza => pizza.name === action.payload.name);
                if (pizzaToAdd) {
                    return { ...state, cart: [...state.cart, { ...pizzaToAdd, quantity: 1 }] };
                }
                return state;
            }
            case "REMOVE_ONE_FROM_CART":
                const updatedCartMinusOne = state.cart.map(item => {
                    if (item.name === action.payload.name) {
                        if (item.quantity > 1) {
                            return { ...item, quantity: item.quantity - 1 };
                        } else {
                            return null;
                        }
                    }
                    return item;
                }).filter(Boolean);
                return { ...state, cart: updatedCartMinusOne };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((pizza) => pizza.name !== action.payload.name) };
        default:
            return state;
    }
};


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const { cart, pizzaVarieties } = state;

    const addToCart = (pizza) => {
        dispatch({ type: "ADD_ONE_TO_CART", payload: pizza });
    };
    
    const decreaseFromCart = (pizza) => {
        dispatch({ type: "REMOVE_ONE_FROM_CART", payload: pizza });
    };

    const removeFromCart = (pizza) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: pizza });
    };

    return (
        <CartContext.Provider value={{ cart, pizzaVarieties, addToCart, decreaseFromCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

//Reducer function

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex(
        (el) => el.name === action.payload.name
      );

      if (itemIndex !== -1) {
        // The item already exists in the cart, just increment quantity

        const updatedCart = [
          ...state.cart.slice(0, itemIndex),
          {
            ...state.cart[itemIndex],
            quantity: state.cart[itemIndex].quantity + 1,
          },
          ...state.cart.slice(itemIndex + 1),
        ];

        return {
          ...state,
          cart: updatedCart,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      const filteredCart = state.cart.filter(
        (el) => el.name !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

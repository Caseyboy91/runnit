import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  // getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  // [{id: 1, quantity:2}]

  function getItemQuantity(id) {
    const quantity = cartItems.find((cartItem) => cartItem.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  async function addOneToCart(id) {
    const quantity = getItemQuantity(id);

    let { data: barItems } = await axios.get("/bar");
    const item = barItems.find((item) => item.id === id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
          item,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => {
        return cartItem.id != id;
      })
    );
  }

  // function getTotalCost() {
  //   let totalCost = 0;
  //   cartItems.map((cartItem) => {
  //     const itemData = getProducts(cartItem.id);
  //     totalCost += itemData.price * cartItem.quantity;
  //   });
  //   return totalCost;
  // }

  const contextValue = {
    items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    // getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

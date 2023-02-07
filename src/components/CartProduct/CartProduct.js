import { Button } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
// import {getProductData} from "../productsStore"

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);
  //   const itemData = getItemData(id);

  return (
    <>
      {/* <h3>{itemData.title}</h3> */}
      {/* <img src={itemData.image} alt={itemData.title} /> */}
      <p>{quantity} total</p>
      {/* <p>${(quantity * itemData.price).toFixed(2)}</p> */}
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;

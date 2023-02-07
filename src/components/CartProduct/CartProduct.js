import { Button } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
// import {getProductData} from "../productsStore"

function CartProduct({ quantity, item }) {
  const cart = useContext(CartContext);
  const itemData = item.id;
  console.log(item);

  return (
    <>
      <h3>{item.name}</h3>
      <h5>{quantity} total</h5>
      <h6>${(quantity * item.price).toFixed(2)}</h6>
      <Button size="sm" onClick={() => cart.deleteFromCart(item.id)}>
        Remove
      </Button>
      <hr></hr>
    </>
  );
}

export default CartProduct;

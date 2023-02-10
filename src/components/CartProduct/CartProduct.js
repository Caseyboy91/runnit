import { Button } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "./CartProduct.scss";

function CartProduct({ quantity, item }) {
  const cart = useContext(CartContext);
  const itemQuantity = cart.getItemQuantity(item.id);
  return (
    <section className="container">
      <h3>{item.name}</h3>
      <img className="modal-img" src={item.image} alt={item.name} />
      <h5>{quantity} total</h5>
      <h6>${(quantity * item.price).toFixed(2)}</h6>

      <div className="btn-group">
        <Button onClick={() => cart.addOneToCart(item.id)} className="mx-2 ">
          <h3>+</h3>
        </Button>
        {<br />}
        <Button
          onClick={() => cart.removeOneFromCart(item.id)}
          className="mx-2 "
        >
          <h3>-</h3>
        </Button>
        <Button
          className="mx-2 btn-danger"
          onClick={() => cart.deleteFromCart(item.id)}
        >
          Remove
        </Button>
      </div>
      <hr></hr>
    </section>
  );
}

export default CartProduct;

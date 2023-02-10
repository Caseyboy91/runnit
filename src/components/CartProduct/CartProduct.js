import { Button } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "./CartProduct.scss";

function CartProduct({ quantity, item }) {
  const cart = useContext(CartContext);

  return (
    <section className="container cartProduct">
      <div className="cartProduct__left">
        <h3>{item.name}</h3>
        <img className="modal-img" src={item.image} alt={item.name} />
      </div>
      <div className="cartProduct__right">
        <h3>{quantity} total</h3>
        <h4>${(quantity * item.price).toFixed(2)}</h4>

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
      </div>
    </section>
  );
}

export default CartProduct;

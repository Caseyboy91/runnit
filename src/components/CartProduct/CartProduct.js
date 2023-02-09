import { Button, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "./CartProduct.scss";

function CartProduct({ quantity, item }) {
  const cart = useContext(CartContext);
  const itemData = item.id;
  console.log(item);

  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <h3 className="">{item.name}</h3>
          <img className="modal-img" src={item.image} alt={item.name} />
          <h5>{quantity} total</h5>
          <h6>${(quantity * item.price).toFixed(2)}</h6>
          <Button size="sm" onClick={() => cart.deleteFromCart(item.id)}>
            Remove
          </Button>
          <hr></hr>
        </div>
      </div>
    </section>
  );
}

export default CartProduct;

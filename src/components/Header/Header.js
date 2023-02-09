import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Navbar,
  Modal,
  Form,
  FormLabel,
} from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";
import logo from "../../Assets/images/Runnit-1.png";
import "./Header.scss";

const Header = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch("http://localhost:5050/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="container ">
      <Navbar>
        <Navbar.Brand href="/">
          <img src={logo} alt="runnit" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button className="button-header btn-lg" onClick={handleShow}>
            <h4> Cart ({itemsCount}) Items </h4>
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <section className="container ">
        <Modal
          className="modal-dialog-scrollable "
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="modal-title" closeButton>
            <Modal.Title>
              <h1>Cart</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-color">
            <Form noValidate>
              <FormLabel for="text">Deliver To: </FormLabel>
              <div className="input-group">
                <div className="input-group-text bg-primary text-white">
                  Sec
                </div>
                <input
                  type="text"
                  id="text"
                  className="form-control"
                  placeholder="Section Number"
                  required
                />

                <div className="input-group-text bg-primary text-white">
                  Seat
                </div>
                <input
                  type="number"
                  id="text"
                  className="form-control"
                  placeholder="Seat Number"
                  required
                />
              </div>
            </Form>
            <br />
            {itemsCount > 0 ? (
              <>
                <h4>Items in your cart: </h4>
                <br />
                {cart.items.map((currentItem) => (
                  <CartProduct
                    key={currentItem.id}
                    item={currentItem.item}
                    quantity={currentItem.quantity}
                  ></CartProduct>
                ))}

                <h2>{`Total: $ ${getTotalCost(cart.items).toFixed(2)}`}</h2>
                <Button variant="success" onClick={checkout}>
                  Purchase items!
                </Button>
              </>
            ) : (
              <h2>There are no items in your cart!</h2>
            )}
          </Modal.Body>
        </Modal>
      </section>
    </header>
  );
};

function getTotalCost(items) {
  return items.reduce((sum, item) => {
    const unitCost = item.item.price;
    return sum + unitCost * item.quantity;
  }, 0);
}

export default Header;

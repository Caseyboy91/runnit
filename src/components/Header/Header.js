import { Link } from "react-router-dom";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";

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
    <>
      <Navbar>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({itemsCount}) Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {itemsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
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
    </>
  );
};

function getTotalCost(items) {
  return items.reduce((sum, item) => {
    const unitCost = item.item.price;
    return sum + unitCost * item.quantity;
  }, 0);
}

export default Header;

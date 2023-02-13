import { Button, Navbar, Modal, Form, FormLabel } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import CartProduct from "../CartProduct/CartProduct";
import logo from "../../Assets/images/Runnit-2.png";
import "./Header.scss";

const Header = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
  const REACT_APP_API_PORT = process.env.REACT_APP_API_PORT;

  const checkout = async () => {
    await fetch(`${REACT_APP_BASE_API_URL}${REACT_APP_API_PORT}/checkout`, {
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

  function getTotalCost(items) {
    return items.reduce((sum, item) => {
      const unitCost = item.item.price;
      return sum + unitCost * item.quantity;
    }, 0);
  }

  const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="container header">
      <Navbar>
        <Navbar.Brand href="/">
          <img src={logo} alt="runnit" className="header__logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button className="header__btn btn-lg" onClick={handleShow}>
            <h4> Cart ({itemsCount}) </h4>
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>

      {/* cart */}
      <section className="container modal">
        <Modal
          className="modal-dialog-scrollable "
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="modal__title" closeButton>
            <Modal.Title>
              <h1 className="modal__title-text">Cart</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal__body">
            {itemsCount > 0 ? (
              <>
                <h2 className="modal__body-title">Items in your cart: </h2>

                {cart.items.map((currentItem) => (
                  <section className="cart-product">
                    <hr></hr>
                    <CartProduct
                      key={currentItem.id}
                      item={currentItem.item}
                      quantity={currentItem.quantity}
                    ></CartProduct>
                  </section>
                ))}

                <hr></hr>

                <Form className="form" noValidate>
                  <FormLabel className="form__title" for="text">
                    Deliver To{" "}
                  </FormLabel>
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

                <hr></hr>

                <div className="purchase">
                  <h2>{`Total: $ ${getTotalCost(cart.items).toFixed(2)}`}</h2>
                  <Button
                    className="purchase__btn btn-lg"
                    variant="success"
                    onClick={checkout}
                  >
                    Purchase items!
                  </Button>
                </div>
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

export default Header;

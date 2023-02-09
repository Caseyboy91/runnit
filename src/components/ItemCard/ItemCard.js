import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "./ItemCard.scss";

const ItemCard = ({ item }) => {
  const cart = useContext(CartContext);
  const itemQuantity = cart.getItemQuantity(item.id);

  return (
    <Card>
      <Card.Body className="itemCard">
        <Card.Title>
          <h2 className="itemText">{item.name}</h2>
        </Card.Title>
        <Card.Img src={item.image} />
        <Card.Text>
          <h3 className="itemText">{item.description}</h3>
        </Card.Text>
        <Card.Text>
          <h3 className="itemText">${item.price}</h3>
        </Card.Text>
        {itemQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label className="inCart" column="true" sm="6">
                <h3>In Cart: {itemQuantity}</h3>
              </Form.Label>

              <Col sm="6">
                <div className="btn-group">
                  <Button
                    sm=""
                    onClick={() => cart.addOneToCart(item.id)}
                    className="mx-2 "
                  >
                    <h3>+</h3>
                  </Button>
                  {<br />}
                  <Button
                    sm="6"
                    onClick={() => cart.removeOneFromCart(item.id)}
                    className="mx-2 "
                  >
                    <h3>-</h3>
                  </Button>
                </div>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(item.id)}
              className="my-2"
            >
              <h3>Remove from Cart</h3>
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => cart.addOneToCart(item.id)}>
            <h3>Add to Cart</h3>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemCard;

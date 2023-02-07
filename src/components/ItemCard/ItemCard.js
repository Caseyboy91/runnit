import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import "./ItemCard.scss";

const ItemCard = ({ item }) => {
  const cart = useContext(CartContext);
  const itemQuantity = cart.getItemQuantity(item.id);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Img src={item.image} />
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        {itemQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label className="inCart" column="true" sm="6">
                In Cart: {itemQuantity}
              </Form.Label>

              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOneToCart(item.id)}
                  className="mx-2 d-block gap-2 mx-auto"
                >
                  +
                </Button>
                {<br />}
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(item.id)}
                  className="mx-2 d-block gap-2 mx-auto"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(item.id)}
              className="my-2"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={() => cart.addOneToCart(item.id)}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemCard;

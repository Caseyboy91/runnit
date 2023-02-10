import "./Cancel.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <section className="container cancel">
      <h1 className="cancel__text">
        Sorry to see you cancelled your Stripe payment
      </h1>
      <Link to="/">
        <Button className="btn btn-lg cancel__btn">Return Home</Button>
      </Link>
    </section>
  );
};

export default Cancel;

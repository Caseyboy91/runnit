import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Runnit | Home";
  });
  return (
    <main>
      <section className="home__container">
        <div className="pickup">Pickup</div>
        <div className="Delivery">Deliver</div>
      </section>
      <section className="menu__container">
        <Link to="/bar">
          <div className="bar">Bar</div>
        </Link>
        <Link to="/concession">
          <div className="concession">Concession</div>
        </Link>
        <Link to="/merch">
          <div className="merch">Merch</div>
        </Link>
      </section>
    </main>
  );
};

export default Home;

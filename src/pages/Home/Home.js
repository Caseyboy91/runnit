import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Runnit | Home";
  });
  return (
    <main>
      <section className="container  btn-group gap-2 justify-content-evenly align-middle">
        <div className="pickup">
          <Link to="/bar">
            <button className="button btn btn-primary btn-lg">Deliver</button>
          </Link>
        </div>
        <div className="delivery">
          <Link to="/bar">
            <button className="button btn btn-primary btn-lg">Pickup</button>
          </Link>
        </div>
      </section>
      {/* <section className="container">
        <Link to="/bar">
          <div className="bar">Bar</div>
        </Link>
        <Link to="/concession">
          <div className="concession">Concession</div>
        </Link>
        <Link to="/merch">
          <div className="merch">Merch</div>
        </Link>
      </section> */}
    </main>
  );
};

export default Home;

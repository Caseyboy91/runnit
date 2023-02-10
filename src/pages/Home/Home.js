import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Runnit | Home";
  });
  return (
    <main>
      <section className="container  btn-group gap-2 justify-content-evenly ">
        <div className="pickup">
          <Link to="/items">
            <button className="button btn btn-primary btn-lg">
              <h1>Deliver</h1>
            </button>
          </Link>
        </div>
        <div className="delivery">
          <Link to="/items">
            <button className="button btn btn-primary btn-lg">
              <h1>Pickup</h1>
            </button>
          </Link>
        </div>
      </section>
      <hr></hr>
    </main>
  );
};

export default Home;

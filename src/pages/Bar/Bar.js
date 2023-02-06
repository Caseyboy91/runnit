import { useEffect, useState } from "react";
import axios from "axios";
import "./Bar.scss";

const Bar = () => {
  useEffect(() => {
    document.title = "Runnit | Bar";
  });

  const [barData, setBarData] = useState([{}]);

  useEffect(() => {
    const getBarItems = async () => {
      try {
        let { data: barItems } = await axios.get("/bar");
        console.log(barItems);
        setBarData(barItems);
      } catch (error) {
        console.error(error);
      }
    };
    getBarItems();
  }, []);

  if (!barData) {
    return <div>Loading Bar ...</div>;
  }

  return (
    <section>
      <header>
        <h1 className="title">Bar</h1>
      </header>
      <main>
        <section className="item">
          {barData.map((item) => {
            return (
              <div key={item.id} className="item__container">
                <h2 className="item__name">{item.name}</h2>
                <img className="item__image" src={item.image} alt={item.name} />
                <h3 className="item__description">{item.description}</h3>
                <h3 className="item__price">{item.price}</h3>
                <div className="quantity__container">
                  <button className="quantity__add-to-cart">Add To Cart</button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </section>
  );
};

export default Bar;

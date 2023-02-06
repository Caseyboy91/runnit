import { useEffect, useState } from "react";
import axios from "axios";

const Concession = () => {
  useEffect(() => {
    document.title = "Runnit | Concession";
  });

  const [concessionData, setConcessionData] = useState([{}]);

  useEffect(() => {
    const getConcessionItems = async () => {
      try {
        let { data: concessionItems } = await axios.get("/concession");
        console.log(concessionItems);
        setConcessionData(concessionItems);
      } catch (error) {
        console.error(error);
      }
    };
    getConcessionItems();
  }, []);

  if (!concessionData) {
    return <div>Loading Concession ...</div>;
  }

  return (
    <section>
      <header>
        <h1 className="title">Concession</h1>
      </header>
      <main>
        {concessionData.map((item) => {
          return (
            <div key={item.id} className="item__container">
              <img
                className="item__image"
                src={item.image}
                alt="concession item"
              />
              <h2 className="item__description">{item.description}</h2>
              <h2 className="item__price">{item.price}</h2>
              <div className="quantity__container">
                <button className="quantity__add">+</button>
                <div className="quantity__count"></div>
                <button className="quantity__subtract">-</button>
                <button className="quantity__add-to-cart">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Concession;

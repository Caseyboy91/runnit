import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./Items.scss";

const Items = () => {
  useEffect(() => {
    document.title = "Runnit | Items";
  });

  const [itemData, setItemData] = useState([{}]);

  useEffect(() => {
    const getItems = async () => {
      try {
        let { data: items } = await axios.get("/items");

        setItemData(items);
      } catch (error) {
        console.error(error);
      }
    };
    getItems();
  }, []);

  if (!itemData) {
    return <div>Loading Items ...</div>;
  }

  return (
    <section>
      <header className="container">
        <h1 align="center" className="p-3 page-title">
          Items
        </h1>
      </header>
      <main className="container">
        <Row xs={2} md={4} lg={6} className="g-4">
          {itemData.map((item) => (
            <Col align="center" key={item.id}>
              <ItemCard item={item} />
            </Col>
          ))}
        </Row>
      </main>
    </section>
  );
};

export default Items;

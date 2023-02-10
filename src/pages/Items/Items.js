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
      <hr></hr>
      <div className="container">
        <header className="container items-header">
          <h1 align="center" className="p-3 page-title">
            ITEMS
          </h1>
        </header>
      </div>
      <main className="container">
        <Row xs={2} md={4} lg={6} className="g-4">
          {itemData.map((item) => (
            <Col align="center" key={item.id}>
              <ItemCard item={item} />
            </Col>
          ))}
        </Row>
      </main>
      <hr></hr>
    </section>
  );
};

export default Items;

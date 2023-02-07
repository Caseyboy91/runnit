import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard/ItemCard";

const Bar = () => {
  useEffect(() => {
    document.title = "Runnit | Bar";
  });

  const [barData, setBarData] = useState([{}]);

  useEffect(() => {
    const getBarItems = async () => {
      try {
        let { data: barItems } = await axios.get("/bar");

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
        <h1 align="center" className="p-3">
          Bar
        </h1>
      </header>
      <main>
        <Row xs={2} md={4} lg={6} className="g-4">
          {barData.map((item) => (
            <Col align="center" key={item.id}>
              <ItemCard item={item} />
            </Col>
          ))}
        </Row>
      </main>
    </section>
  );
};

export default Bar;

import { useEffect, useState } from "react";
import axios from "axios";

const Merch = () => {
  useEffect(() => {
    document.title = "Runnit | Merch";
  });

  const [merchData, setMerchData] = useState([{}]);

  useEffect(() => {
    const getMerchItems = async () => {
      try {
        let { data: merchItems } = await axios.get("/merch");
        console.log(merchItems);
        setMerchData(merchItems);
      } catch (error) {
        console.error(error);
      }
    };
    getMerchItems();
  }, []);

  if (!merchData) {
    return <div>Loading Merch ...</div>;
  }

  return (
    <>
      <h1 className="title">Merch</h1>
    </>
  );
};

export default Merch;

import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "PAGE NOT FOUND | 404";
  }, []);
  return (
    <section className="container">
      <h1>404: PAGE NOT FOUND</h1>
    </section>
  );
};

export default NotFound;

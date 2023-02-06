import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "PAGE NOT FOUND | 404";
  }, []);
  return (
    <>
      <h1>404: PAGE NOT FOUND</h1>
    </>
  );
};

export default NotFound;

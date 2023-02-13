import runnitQr from "../../Assets/images/qr-code.svg";
import { useEffect } from "react";
import "./Success.scss";

const Success = () => {
  useEffect(() => {
    document.title = "Runnit | Success";
  });
  return (
    <section className="container qr">
      <div className="qr__text">
        <h1 className="qr__text-title">Thank you for your purchase!</h1>
        <p>Please keep this QR code ready in order to accept your order.</p>
      </div>
      <div>
        <img className="qr__code" src={runnitQr} alt="qr code" />
      </div>
    </section>
  );
};

export default Success;

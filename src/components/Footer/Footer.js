import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="container footer">
        <div className="contact">
          <h4>Contact Us</h4>
          <a className="contact__text" href="mailto:contact@werunnit.com">
            contact@werunnit.com
          </a>
        </div>

        <div className="support">
          <h4>Support</h4>
          <a className="support__text">FAQ</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

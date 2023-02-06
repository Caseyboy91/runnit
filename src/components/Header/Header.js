import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <Link className="link" to="/">
          <img src="" alt="runnit logo" />
        </Link>

        <img src="" alt="menu" />
      </div>
    </header>
  );
};

export default Header;

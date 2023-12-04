import { useSelector } from "react-redux";
import "../App.css";
import Logo from "../assets/web-app-logo-white.png";
import PropTypes from "prop-types";

function Header(props) {
  const handleCart = () => {
    props.setIsshown(false);
    props.setDivShow(true);
  };

  const handleDiv = () => {
    props.setIsshown(true);
    props.setDivShow(false);
  };

  const price = useSelector((state) => state.price);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="#">
          <img src={Logo} alt="LWS" className="img" />
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            className="navHome"
            id="lws-home"
            onClick={() => handleDiv()}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#"
            className="navCart"
            id="lws-cart"
            onClick={() => handleCart()}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{price.quantity}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
Header.propTypes = {
  setIsshown: PropTypes.any,
  setDivShow: PropTypes.any,
};
export default Header;

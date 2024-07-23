import logo from "../assets/Logo.png";
import { Link,NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <span>Rota Mate</span>
      </Link>

      <nav className="navigation">
        <Link to="/" className="link" end> Home   </Link>
        <Link to="/products" className="link">  Produtos   </Link>
        <Link to="/contact" className="link">  Contatos  </Link>
      </nav>
    </header>
  );
};

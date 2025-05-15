import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <header></header>
        <div style={{ border: "1px solid blue" }}>Header ejemplo</div>
        <div>
          <nav>
            <Link className="p-2 link-secondary" to="/" title="Home">
              Home
            </Link>
            <Link
              className="p-2 link-secondary"
              to="/acomodadores"
              title="Rutas"
            >
              Rutas
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { CartIcon } from "../../icos";
function NavBar(props) {
   const { cart } = useContext(CartContext);
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
               E<span className="libText">.Lib</span>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>

            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav mr-auto">
                  <li
                     className={`nav-item ${
                        props.pathname === "/" ? "active" : ""
                     }`}
                  >
                     <Link className="nav-link" to="/">
                        Home
                     </Link>
                  </li>
                  <li
                     className={`nav-item ${
                        props.pathname === "/about" ? "active" : ""
                     }`}
                  >
                     <Link className="nav-link" to="/about">
                        About
                     </Link>
                  </li>
                  <li className="nav-item dropdown">
                     <Link
                        className="nav-link dropdown-toggle"
                        to="/"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                     >
                        Category
                     </Link>
                     <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                     >
                        <button className="dropdown-item">
                           Fictional Story
                        </button>
                        <Link className="dropdown-item">Business</Link>
                        <Link className="dropdown-item">Philosophy</Link>
                        <Link className="dropdown-item">Self Development</Link>
                        <Link className="dropdown-item">Educational</Link>
                     </div>
                  </li>
               </ul>
               <Link
                  to={"/cart"}
                  className={`cart text-decoration-none text-dark nav-item ${
                     props.pathname === "/cart" ? "active" : ""
                  }`}
               >
                  {cart.length !== 0 ? (
                     <div className="count">{cart.length}</div>
                  ) : (
                     ""
                  )}
                  <CartIcon height={"2rem"} width={"2rem"} />
               </Link>
               <a
                  className="btn btn-outline-warning my-2 my-sm-0 searchBtn"
                  href="#booksContainer"
                  type="submit"
               >
                  Search
               </a>
            </div>
         </nav>
      </>
   );
}

export default NavBar;

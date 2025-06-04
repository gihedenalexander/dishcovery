export function Navbar({ currentPage, setCurrentPage }) {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a
          href="#"
          className={`nav-link ${currentPage == "home" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("home");
          }}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className={`nav-link ${currentPage == "about" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("about");
          }}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#"
          className={`nav-link ${currentPage == "favorites" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("favorites");
          }}
        >
          Favorite Foods
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
export const Nabvar = () => {
  return (
    <>
      <header className="container_navbar">
        <nav>
          <div>
            {" "}
            <h2 className="logo">Movies</h2>
          </div>
          <ul>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Series</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
          <input className="search" type="text" />
        </nav>
      </header>
    </>
  );
};

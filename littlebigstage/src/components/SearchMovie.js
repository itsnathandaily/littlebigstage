import React from "react";
import { SearchMoviesContext } from "../App";

function SearchMovie({ setListMovies }) {
  const { searchForMovies } = React.useContext(SearchMoviesContext);
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState(null);

  React.useEffect(() => {
    const [...result] = searchForMovies(search);
    setListMovies(result);
  }, [search]);

  return (
    <div className="minnavdiv">
      <form
        onSubmit={(event) => setQuery(event.target.value)}
        className="search-form"
      >
        <input
          className="navdiv"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button>Submit</button> */}
      </form>
    </div>
  );
}

export default React.memo(SearchMovie);

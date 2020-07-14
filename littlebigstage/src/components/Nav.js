import React from 'react';
import { Link } from 'react-router-dom';
import SearchMovie from './SearchMovie';


const Nav = ({ ExistingMovies, setListMovies, USERLOGGEDIN }) => {
 
  const inputref = React.useRef();

  const navStyle = {
    color: 'white',
  };

  React.useEffect(() => {
    inputref.current.click();
  }, [ExistingMovies]);

  return (
    <nav className="nav">
      <div className="title_Link">
        <Link id="title_Link" style={navStyle} to="/" onClick={() => setListMovies(ExistingMovies)} ref={inputref}>
          <h1>Little Big Stage</h1>
        </Link>
      </div>
      <div className="searchmovie_div">
        <SearchMovie setListMovies={setListMovies} />
      </div>
      <Link style={navStyle} to="/addcontent">
        <p>Add Content</p>
      </Link>
      <Link style={navStyle} to="/register">
        <p>Register | Login</p>
      </Link>
      {/* <Link style={navStyle} to="/addreview">
        <p>add review</p>
      </Link> */}
      <p>Total Reviewed {ExistingMovies.length}</p>
      {USERLOGGEDIN ? <p>Hi {USERLOGGEDIN}</p> : null}
    </nav>
  );
};

export default React.memo(Nav);

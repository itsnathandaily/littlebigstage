import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import SearchMovie from "../SearchMovie";
// import { StyledLink } from './Nav.styles';

const Nav = ({ ExistingMovies, setListMovies, USERLOGGEDIN }) => {
  const inputref = React.useRef();
  let history = useHistory();

  const navStyle = {
    color: "white",
  };

  React.useEffect(() => {
    inputref.current.click();
  }, [ExistingMovies]);

  const handleTitleClick = () => {
    setListMovies(ExistingMovies);
    history.push("/");
  };

  return (
    <div>
      <nav className="nav">
        {/* <div className="titleLink">
          <Link
            id="titleLink"
            style={navStyle}
            onClick={handleTitleClick}
          >
            <h1>Little Big Stage</h1>
          </Link>
        
        </div> */}

        {/* <div className="searchmovie_div">
          <SearchMovie setListMovies={setListMovies} />
        </div> */}

        {/* <Link style={navStyle} to="/register">
        <p>Register | Login</p>
      </Link> */}

        {/* <Link style={navStyle} to="/addreview">
        <p>add review</p>
      </Link> */}

        {/* <p>Total Reviewed {ExistingMovies.length}</p> */}
      </nav>
      <nav className="mainnavdiv">
        <div className="navdiv" onClick={handleTitleClick} ref={inputref}>
          <div className="titleLogo">
            <h1 className="btn">
              Little Big Stage
            </h1>
          </div>
        </div>

        <div className="navdiv">
          <SearchMovie setListMovies={setListMovies} />
        </div>
        <div className="navdiv">
          <Link style={navStyle} to="/addcontent">
            <p>Add Content</p>
          </Link>
        </div>

        {/* <div className="navdiv">
          <Link style={navStyle} to="/register">
            <p>Register | Login</p>
          </Link>
        </div> */}

        {/* <div className="navdiv">
          <Link style={navStyle} to="/addreview2">
            <p>add review</p>
          </Link>
        </div> */}

        {/* <div className="navdiv">
          <p>Total Reviewed {ExistingMovies.length}</p>
        </div> */}
        <div className="navdiv">
          {USERLOGGEDIN ? <p>Hi {USERLOGGEDIN}</p> : null}
        </div>
      </nav>

    </div>
  );
};

export default React.memo(Nav);

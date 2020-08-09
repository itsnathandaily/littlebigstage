import React from 'react';
import styled from 'styled-components';

export const Link = ({ className, ExistingMovies, setListMovies, inputref, children }) => (
  <a className={className} to="/" onClick={() => setListMovies(ExistingMovies)} ref={inputref}>
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

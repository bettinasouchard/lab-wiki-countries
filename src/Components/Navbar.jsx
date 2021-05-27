import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
      <NavLink class="navbar-brand" exact to="/">
        WIkiCountries
      </NavLink>
      </div>
    </nav>
  );
};

export default NavMain;


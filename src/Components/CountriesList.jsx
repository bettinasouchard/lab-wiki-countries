import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const Countries = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-5" style={{ maxHeight: '90 vh', overflow: 'scroll' }}>
          <div class="list-group">
            {countries.map((country) => {
              return (
                <div key={country.cca3}>
                  <Link
                    class="list-group-item list-group-item-action"
                    exact
                    to={`/${country.cca3}`}
                  >
                    {country.flag}
                    {country.name.common}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Countries;

import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const findCountry = countries.find((oneCountry) => {
    return oneCountry.cca3 === props.match.params.cca3;
  });

  return (
    <div className="col-7">
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <h1>{findCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{findCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {findCountry.area}
              <sup>{}</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {findCountry.borders.map((pays) => {
                  return (
                    <li key = {pays.cca3}>
                      <Link exact to={`/${pays}`}>{pays}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;


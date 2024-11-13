import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const api = 'https://cs464p564-frontend-api.vercel.app/api/countries';

const List = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => setResult(response.data))
      .catch((err) => console.log(err));
  }, []);

  function formattedNumber(number) {
    return number.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      notation: 'compact',
      compactDisplay: 'short',
    });
  }

  return (
    <main class="bg-black">
      <div>
        <h1 class="text-white">Nations of South America</h1>
        <div className="card-holder">
          {result.map((country) => (
            <Card
              className="bg-dark text-white"
              style={{ width: '300px', height: '400px' }}
            >
              <Card.Img
                variant="top"
                src={country.flag_png}
                style={{ width: '100%', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>
                  With a population of roughly{' '}
                  {formattedNumber(country.population)} people, {country.name}{' '}
                  Has a net GDP of {country.gdp_billions} billion dollars and
                  the majority of its people speak{' '}
                  {country.official_languages[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default List;

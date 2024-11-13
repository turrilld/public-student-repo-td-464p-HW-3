import React from 'react';
import { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { backgroundColors, borderColors } from '../utils/chartColors.js';

const api = 'https://cs464p564-frontend-api.vercel.app/api/countries';

const GDP = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => setResult(response.data))
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: result.map((country) => country.name),
    datasets: [
      {
        label: 'GDP - Billions USD',
        data: result.map((country) => country.gdp_billions),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
  };

  const styles = {
    chartContainer: {
      maxWidth: '500px',
      width: '60%',
      height: '60%',
      margin: '20px auto',
    },
  };

  return (
    <div>
      <div>
        <h1>GDP of South American Countries</h1>
        <div style={styles.chartContainer}>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
};

export default GDP;

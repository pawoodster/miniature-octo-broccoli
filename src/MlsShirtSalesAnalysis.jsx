import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { CitationLink } from './components/ui/citation';

const MlsShirtSalesAnalysis = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchSalesData = async () => {
      try {
        // In a real application, you would fetch data from an actual API endpoint
        const mockData = [
          { id: 1, team: 'LA Galaxy', shirtSize: 'M', quantitySold: 120, price: 35 },
          { id: 2, team: 'Seattle Sounders FC', shirtSize: 'L', quantitySold: 90, price: 35 },
          { id: 3, team: 'Atlanta United FC', shirtSize: 'S', quantitySold: 150, price: 30 },
          { id: 4, team: 'Toronto FC', shirtSize: 'XL', quantitySold: 70, price: 40 },
          { id: 5, team: 'LA Galaxy', shirtSize: 'L', quantitySold: 100, price: 35 },
          { id: 6, team: 'Seattle Sounders FC', shirtSize: 'M', quantitySold: 80, price: 35 },
          { id: 7, team: 'Atlanta United FC', shirtSize: 'L', quantitySold: 130, price: 30 },
          { id: 8, team: 'Toronto FC', shirtSize: 'M', quantitySold: 60, price: 40 },
        ];
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSalesData(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <div>Loading sales data...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  // Calculate total revenue
  const totalRevenue = salesData.reduce((acc, item) => acc + item.quantitySold * item.price, 0);

  // Calculate sales by team
  const salesByTeam = salesData.reduce((acc, item) => {
    acc[item.team] = (acc[item.team] || 0) + item.quantitySold;
    return acc;
  }, {});

  // Calculate sales by shirt size
  const salesByShirtSize = salesData.reduce((acc, item) => {
    acc[item.shirtSize] = (acc[item.shirtSize] || 0) + item.quantitySold;
    return acc;
  }, {});

  return (
    <div>
      <h1>MLS Shirt Sales Analysis</h1>

      <section>
        <h2>Total Revenue</h2>
        <p>${totalRevenue.toFixed(2)}</p>
      </section>

      <section>
        <h2>Sales by Team</h2>
        <ul>
          {Object.entries(salesByTeam).map(([team, quantity]) => (
            <li key={team}>{team}: {quantity} shirts</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Sales by Shirt Size</h2>
        <ul>
          {Object.entries(salesByShirtSize).map(([size, quantity]) => (
            <li key={size}>{size}: {quantity} shirts</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Raw Sales Data</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Shirt Size</th>
              <th>Quantity Sold</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map(item => (
              <tr key={item.id}>
                <td>{item.team}</td>
                <td>{item.shirtSize}</td>
                <td>{item.quantitySold}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.quantitySold * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MlsShirtSalesAnalysis;

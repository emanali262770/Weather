import React, { useEffect, useState } from "react";

import axios from "axios";

const UseFetch = (value) => {
  const [loading, setLoading] = useState(false);
  const [WeatherData, setWeatherData] = useState([]);

  const getData = async () => {
    setLoading(true);

    const weatherApi = `https://api.weatherapi.com/v1/current.json?key=222bf84e2ec94c49b47123609241012&q=${value}&aqi=no`;
    const { data } = await axios.get(weatherApi);

    setWeatherData([data]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [value]);
  return { WeatherData, loading };
};

export default UseFetch;

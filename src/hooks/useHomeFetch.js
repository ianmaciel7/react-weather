import { useState, useEffect } from "react";

import API from "../service/openWeatherMapApi";

const initialState = {
  main: {},
  weather: [{}],
  wind: [{}],
  sys: {},
};

export const useHomeFetch = () => {
  const [city, setCity] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("london");

  const fetchCity = async (search = "") => {
    try {
      setError(false);
      setLoading(true);
      const response = await API.fetchCity(search);
      setCity(response);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCity(search);
  }, [search]);

  return {
    city,
    loading,
    error,
    search,
    setSearch,
  };
};

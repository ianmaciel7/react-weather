import React, { useState, useEffect } from "react";
import API from "../service/openWeatherMapApi";
import Header from "../components/Header";
import Spinner from "../components/Spinner/index";

import Grid from "../components/Grid";

import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { city, loading, error, search, setSearch } = useHomeFetch();

  return (
    <>
      <Header />
      <Grid city={city} error={error} loading={loading} setSearch={setSearch} />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@mui/material";

import { getLocationData } from "./api";
import Header from "./components/Header/Header";
import ListItems from "./components/ListItems/ListItems";
import Map from "./components/Map/Map";

const App = () => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    getLocationData().then((data) => {
      console.log(data);
      setLocation(data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <ListItems />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

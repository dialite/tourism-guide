import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@mui/material";
// import { LocationOnOutlinedIcon } from "@mui/icons-material/LocationOnOutlined";
// import Rating from "@mui/material";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinates = { lat: 0, lng: 0 };
  const google_key = process.env.REACT_APP_GOOGLE_KEY;

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_key }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

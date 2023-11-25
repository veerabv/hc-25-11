import { Box, Typography, Button, Grid } from "@mui/material";

import React from "react";
import "../Assets/css/AddressMap.css";
import shareIcon from "../Assets/Static/shareIcon.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import map from "../Assets/Static/map.png";

function AddressMap() {
  const apiKey = "AIzaSyAzHzsyIq0Exln-QjwtTyNG2AAF0q39eEU";
  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 100,
        },
      ],
    },
  ];
  return (
    <>
      <Box sx={{ margin: "auto", width: "1300px", padding: "20px 0px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "32px",
              fontFamily: "popins",
              fontWeight: "900",
              color: "#212220",
              textDecoration: "underline",
            }}
          >
            Abraham Lincoln Memorial Hospital
          </Typography>

          <Button
            variant="outlined"
            sx={{
              border: "1px solid #45A736",
              color: "#45A736",
              padding: "5px 16px",
              borderRadius: "40px",
              fontFamily: "popins",
              fontSize: "16px",
              fontWeight: "600",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              "&:hover": {
                backgroundColor: "inherit",
                border: "1px solid #45A736",
              },
            }}
          >
            Share {<img src={shareIcon} alt="icon" />}
          </Button>
        </Box>
        <Grid container sx={{ marginTop: "18px" }}>
          <Grid item xs={12} sm={3} className="location-css-handle">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
              }}
            >
              <p
                style={{
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Address
              </p>
              <p
                style={{
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Get Directions
              </p>
            </Box>
            <p
              style={{
                marginBottom: "12px",
                color: "#02363D",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              200 Stahlhut Drive, Lincoln, IL,62656
            </p>
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Phone
              </p>
              <p
                style={{
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                212639200
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                width: "75%",
                marginBottom: "12px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "70px",
                  color: "#02363D",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Website
              </p>
              <p
                style={{
                  color: "#45A736",
                  textDecoration: "underline",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Visit
              </p>
            </Box>
            <p
              style={{
                color: "#02363D",
                marginBottom: "6px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Nearby Providers
            </p>
            <Typography
              sx={{
                color: "#45A736",
                marginRight: "2px",
                fontSize: "10px",
                lineHeight: "0px",
                letterSpacing: "0.02px",
              }}
              variant="caption"
              display="inline"
            >
              self Regional Healthcare{" "}
              <span style={{ color: "black" }}>(13 miles)</span>
            </Typography>
            <Typography
              sx={{
                color: "#45A736",
                marginRight: "2px",
                fontSize: "10px",
                lineHeight: "0px",
                letterSpacing: "0.02px",
              }}
              variant="caption"
              display="inline"
            >
              Greenwood Regional Rehabilitation Hospital
              <span style={{ color: "black" }}>(13 miles)</span>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            sx={{ boxSizing: "border-box", paddingLeft: "36px" }}
          >
            {/* <img
              src={map}
              alt="location"
              width="100%"
              style={{ aspectRatio: "4/1", objectFit: "initial" }}
            /> */}
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={{ height: "250px", width: "100%" }}
                center={{ lat: 40.148376, lng: -89.364815 }}
                zoom={12}
                options={{
                  zoomControl: false,
                  fullscreenControl: false,
                  styles: mapStyles,
                }}
              >
                <Marker position={{ lat: 40.148376, lng: -89.364815 }} />
                {/* {!location && (
                  <Marker position={{ lat: 11.0920163, lng: 79.796041 }} />
                )} */}
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AddressMap;

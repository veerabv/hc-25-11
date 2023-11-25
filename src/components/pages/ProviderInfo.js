import React, { useState } from "react";
import AppTitle from "../AppLayout/AppTitle";
import AddressMap from "../AddressMap";
import "../../Assets/css/ProviderInfo.css";

import { Box, Grid, Paper, Stack, Typography, Chip } from "@mui/material";
import AppFooter from "../AppLayout/AppFooter";

function ProviderInfo() {
  const [tab, setTab] = useState("pro-info");
  return (
    <>
      <AppTitle value={false} />
      <Box sx={{ backgroundColor: "#F5F5F5" }}>
        <AddressMap />
      </Box>
      <Box sx={{ margin: "40px auto", width: "1300px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          className="info-buttons"
        >
          <button
            onClick={() => setTab("pro-info")}
            className={tab === "pro-info" ? "active" : ""}
          >
            Provider Info
          </button>
          <button
            onClick={() => setTab("pro-service")}
            className={tab === "pro-service" ? "active" : ""}
          >
            Provider Service
          </button>
          <button
            onClick={() => setTab("pro-mrf")}
            className={tab === "pro-mrf" ? "active" : ""}
          >
            MRF Transparency Scorecard
          </button>
        </Stack>
        <Paper
          sx={{
            margin: "40px auto",
            width: "1300px",
            backgroundColor: "rgb(69 167 54 / 5%)",
            padding: "32px",
            boxSizing: "border-box",
          }}
          elevation={4}
        >
          {tab === "pro-info" && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#212220",
                  }}
                >
                  Provider Info
                </Typography>
                <table className="Provider-info__table">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>Abraham Lincoln Memorial Hospital</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>200 Stahlhut Drive, Lincoln,IL, 62656</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td
                        style={{
                          color: "rgb(69, 167, 54)",
                          textDecoration: "underline",
                        }}
                      >
                        2126392000
                      </td>
                    </tr>
                    <tr>
                      <td>Medical Provider ID</td>
                      <td>141322</td>
                    </tr>
                    <tr>
                      <td>National Provider ID(NPI)</td>
                      <td>1154329753</td>
                    </tr>
                    <tr>
                      <td>website</td>
                      <td
                        style={{
                          color: "rgb(69, 167, 54)",
                          textDecoration: "underline",
                        }}
                      >
                        Visit
                      </td>
                    </tr>
                    <tr>
                      <td>Provider Type</td>
                      <td>Critical Access Hospital</td>
                    </tr>
                    <tr>
                      <td>Beds</td>
                      <td>25</td>
                    </tr>
                  </tbody>
                </table>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#212220",
                  }}
                >
                  Clinical Services
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Acute Renal Dialysis"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Acute"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Dialysis"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="Audiology"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="CARF Inpatient Rehabilitation"
                    variant="outlined"
                  />
                  <Chip
                    sx={{
                      color: "#858585",
                      fontSize: "10px",
                      border: "1px solid #858585",
                    }}
                    label="CARF Inpatient Rehabilitation"
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </Paper>

        {/* {tab === "pro-info" && (<Box sx={{ margin: "40px auto", width: "1300px" }}>
          <Grid></Grid> </Box>)} */}
      </Box>
      <AppFooter />
    </>
  );
}

export default ProviderInfo;

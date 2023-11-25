/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../Assets/css/Home.css";
import { useNavigate } from "react-router-dom";
import HomeWhiteBanner from "../Assets/Static/HomeWhiteBanner.png";
import Typography from "@mui/material/Typography";
import { Grid, Box, Button } from "@mui/material";
import Ellipse from "../Assets/Static/Ellipse.png";
// import homeFooter from "../Assets/Static/homeFooter.png";
import FooterImage from "../Assets/Static/FooterImage.png";
// import imageA from "../Assets/Static/imageA.png";
import bgImage from "../Assets/Static/bgImage.png";
// import imageE from "../Assets/Static/imageE.png";
// import imageU from "../Assets/Static/imageU.png";
// import imageN from "../Assets/Static/imageN.png";
// import image_Luna from "../Assets/Static/image_Luna.png";
// import imageP from "../Assets/Static/imageP.png";
import VerifiedIcon from "@mui/icons-material/Verified";
// import gogoImage from "../Assets/Static/gogoImage.png";
// import SelfCareCafe from "../Assets/Static/SelfCareCafe.png";
// import AreaHealth from "../Assets/Static/AreaHealth.png";
// // import vitaHealth from "../Assets/Static/vitaHealth.png";
// //import yourFitIQ from "../Assets/Static/yourFitIQ.png";
// //import clearwellHealth from "../Assets/Static/clearwellHealth.png";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Env from "../utils/Services/Env";

const CardGrid = () => {
  const navigate = useNavigate();

  const [procedure, setProcedure] = React.useState([]);
  const [provider, setProvider] = React.useState([]);
  const [payer, setPayer] = React.useState([]);

  // const [procedure] = React.useState({
  //   status: 200,
  //   popularServices: [
  //     {
  //       uuid: "1",
  //       name: "Basic metabolic panel",
  //       avgPrice: 120,
  //     },
  //     {
  //       uuid: "2",
  //       name: "Colonoscopy, diagnostic",
  //       avgPrice: 320,
  //     },
  //     {
  //       uuid: "3",
  //       name: "Tonsil Removal",
  //       avgPrice: 750,
  //     },
  //   ],
  // });

  // const [provider] = React.useState({
  //   status: 200,
  //   popularProvders: [
  //     {
  //       uuid: "1",
  //       name: "Luna Physical Therapy - NewYork Region",
  //       logo_url: image_Luna,
  //       location: "New York",
  //       verified: true,
  //     },
  //     {
  //       uuid: "2",
  //       name: "Paloma Health",
  //       logo_url: imageP,
  //       location: "New York",
  //       verified: true,
  //     },
  //     {
  //       uuid: "3",
  //       name: "NYU Langone Tisch",
  //       // logo_url: imageN,
  //       logo_url: "",
  //       location: "New York",
  //       verified: false,
  //     },
  //   ],
  // });

  // const [payer] = React.useState({
  //   status: 200,
  //   popularPayers: [
  //     {
  //       uuid: "1",
  //       name: "Aetna of NY",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //     {
  //       uuid: "2",
  //       name: "Unified Health Group of NY",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //     {
  //       uuid: "3",
  //       name: "Emblem Health",
  //       logo_url: "",
  //       location: "New York",
  //     },
  //   ],
  // });

  React.useEffect(() => {
    providerValue();
    procedureValue();
    payerValue();
  }, []);

  const payerValue = () => {
    const payerVal = Env.get(`payer/popular`);

    payerVal.then(
      (response) => {
        const data = response.data;

        setPayer(data);
        // this.setState({
        //   data: data,
        // });
        // console.log("data", data);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const providerValue = () => {
    const providerVal = Env.get(`provider/popular`);

    providerVal.then(
      (response) => {
        const data = response.data;

        setProvider(data);
        // this.setState({
        //   data: data,
        // });
        // console.log("data", data);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const procedureValue = () => {
    const procedureVal = Env.get(`procedure/popular`);

    procedureVal.then(
      (response) => {
        const data = response.data;
        setProcedure(data);
        // this.setState({
        //   data: data,
        // });
      },
      (error) => {
        console.error(error);
      }
    );

    // const procedureVal = {
    //   status: 200,
    //   popularServices: [
    //     {
    //       uuid: "1",
    //       name: "Basic metabolic panel",
    //       avgPrice: 120,
    //     },
    //     {
    //       uuid: "2",
    //       name: "Colonoscopy, diagnostic",
    //       avgPrice: 320,
    //     },
    //     {
    //       uuid: "3",
    //       name: "Tonsil Removal",
    //       avgPrice: 750,
    //     },
    //   ],
    // };

    // setProcedure(procedureVal);
  };

  return (
    <>
      <Box sx={{ margin: "auto", width: "1300px" }}>
        <Grid
          container
          sx={{
            marginTop: "20px",
            position: "relative",
          }}
        >
          <Grid item sm={3.1} sx={{ marginRight: "33px" }}>
            <div>
              <p
                style={{
                  fontSize: "42px",
                  fontWeight: 600,
                  fontFamily: "poppins semi",
                  marginBottom: 0,
                }}
              >
                Browser <br /> by Procedure
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "800",
                  fontFamily: "poppins thin",
                  color: "#858585",
                  marginTop: 0,
                }}
              >
                <b>
                  lorem ipsum is a simple <br /> dummy text used
                </b>
              </p>
            </div>
            <div>
              <Button
                sx={{ color: "#45a736", textTransform: "none" }}
                onClick={() => navigate("/procedures")}
              >
                <b>
                  View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                </b>
              </Button>
            </div>
          </Grid>
          {/* <Grid
            item
            sx={{
              boxShadow: "0.5px 1px 15px 1px #dadada",
              border: "1px solid #dadada",
              borderRadius: "9px",
              marginTop: "53px",
              width: "90px",
              height: "240px",
              padding: "0px 25px",
              fontFamily: "poppins semi",
              marginRight: "70px",
              display: "flex",
              flexDirection: "column",
            }}
            sm={2.2}
          >
            <div style={{ flex: 1, minHeight: "107px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "22px",
                  color: "#02363D",
                }}
              >
                <b>Basic metabolic panel</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontSize: "37px", margin: 0 }}>
                <b>$ 120</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ marginTop: "9px" }}>Avg. Cash Price</p>
            </div>
          </Grid>

          <Grid
            item
            sx={{
              boxShadow: "0.5px 1px 1px 1px #dadada",
              border: "1px solid #dadada",
              borderRadius: "10px",
              marginTop: "53px",
              width: "90px",
              height: "240px",
              padding: "0px 25px",
              fontFamily: "poppins semi",
              marginRight: "70px",
              display: "flex",
              flexDirection: "column",
            }}
            sm={2.2}
          >
            <div style={{ flex: 1, minHeight: "107px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "22px",
                  color: "#02363D",
                }}
              >
                <b>Colonoscopy, diagnostic</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontSize: "37px", margin: 0 }}>
                <b>$ 320</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ marginTop: "9px" }}>Avg. Cash Price</p>
            </div>
          </Grid>

          <Grid
            item
            sx={{
              boxShadow: "0.5px 1px 1px 1px #dadada",
              border: "1px solid #dadada",
              borderRadius: "9px",
              marginTop: "53px",
              width: "90px",
              height: "240px",
              padding: "0px 25px",
              fontFamily: "poppins semi",
              display: "flex",
              flexDirection: "column",
            }}
            sm={2.2}
          >
            <div style={{ flex: 1, minHeight: "107px", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "22px",
                  color: "#02363D",
                }}
              >
                <b>Tonsil Removal</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ fontSize: "37px", margin: 0 }}>
                <b>$ 750</b>
              </p>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{ marginTop: "9px" }}>Avg. Cash Price</p>
            </div>
          </Grid> */}
          {procedure?.popularServices?.map((service) => (
            <Grid
              key={service.uuid}
              item
              sx={{
                boxShadow: "0.5px 1px 1px 1px #dadada",
                border: "1px solid #dadada",
                borderRadius: "9px",
                marginTop: "53px",
                width: "90px",
                height: "240px",
                padding: "0px 25px",
                fontFamily: "poppins semi",
                display: "flex",
                flexDirection: "column",
                marginRight: "70px",
                "&:hover": {
                  boxShadow: "0.5px 1px 10px 1px #dadada", // Box shadow on hover
                  cursor: "pointer",
                },
                cursor: "pointer",
              }}
              sm={2.2}
              onClick={() => navigate(`/comingsoon?id=${service.uuid}`)}
            >
              <div style={{ flex: 1, minHeight: "107px", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "22px",
                    color: "#02363D",
                  }}
                >
                  <b>{service.name}</b>
                </p>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <p style={{ fontSize: "37px", margin: 0 }}>
                  <b>$ {service.avgPrice}</b>
                </p>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <p style={{ marginTop: "9px" }}>Avg. Cash Price</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid
        sx={{
          backgroundImage: `url(${HomeWhiteBanner})`,
          marginTop: "30px",
          // marginBottom: "420px",
          position: "relative",
        }}
      >
        <Box sx={{ margin: "auto", width: "1300px" }}>
          <Grid container sx={{ marginTop: "150px" }}>
            <Grid item sm={3.1} sx={{ marginRight: "33px" }}>
              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 600,
                    fontFamily: "poppins semi",
                    marginBottom: 0,
                  }}
                >
                  Browser <br /> by Provider
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    fontFamily: "poppins thin",
                    color: "#858585",
                    marginTop: 0,
                  }}
                >
                  <b>
                    lorem ipsum is a simple <br /> dummy text used
                  </b>
                </p>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/providers")}
                  sx={{ color: "#45a736", textTransform: "none" }}
                >
                  <b>
                    View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                  </b>
                </Button>
              </div>
            </Grid>
            {/* <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "82px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/providers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={image_Luna}
                  alt="gogoImage"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Luna Physical Therapy - NewYork Region{" "}
                  <VerifiedIcon
                    sx={{
                      textAlign: "center",
                      color: "#45a736",
                      // marginTop: "10em",
                    }}
                  />
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "82px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/providers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={imageP}
                  alt="Palomahealth"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Paloma Health
                  <VerifiedIcon
                    sx={{
                      textAlign: "center",
                      color: "#45a736",
                    }}
                  />
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{ textAlign: "center", marginTop: "36px", cursor: "pointer" }}
              onClick={() => navigate("/providers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={imageN}
                  alt="NYUlangonetisch"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  NYU Langone Tisch
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid> */}
            {provider?.popularProviders?.map((prov) => (
              <Grid
                key={prov.npi}
                item
                sm={2.1}
                sx={{
                  textAlign: "center",
                  marginTop: "36px",
                  marginRight: "82px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/comingsoon?id=${prov.uuid}`)}
              >
                <div className="image-container">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    className="background-image"
                  />
                  {prov.logo_url === "" || prov.logo_url === null ? (
                    <>
                      <img
                        src={bgImage}
                        alt="bgImage "
                        className="overlay-image"
                      />
                      <p className="overlay-letter">{prov.name[0]}</p>
                    </>
                  ) : (
                    <img
                      src={prov.logo_url}
                      alt={prov.name}
                      className="overlay-image"
                    />
                  )}
                  {/* <img
                    src={prov.logo_url} 
                    alt={prov.name}
                    className="overlay-image"
                  /> */}
                </div>
                <div>
                  <Typography
                    sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                  >
                    {prov.name}
                    {prov.verified ? (
                      <VerifiedIcon
                        sx={{ textAlign: "center", color: "#45a736" }}
                      />
                    ) : (
                      ""
                    )}
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{ color: "#959696", fontFamily: "poppins thin" }}
                  >
                    <b>{prov.location}</b>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <Box sx={{ margin: "auto", width: "1300px" }}>
          <Grid container sx={{ marginTop: "150px" }}>
            <Grid item sm={3.1}>
              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 600,
                    fontFamily: "poppins semi",
                    marginBottom: 0,
                  }}
                >
                  Browser by <br /> Health System
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    fontFamily: "poppins thin",
                    color: "#858585",
                    marginTop: 0,
                  }}
                >
                  <b>
                    lorem ipsum is a simple <br /> dummy text used
                  </b>
                </p>
              </div>
              <div>
                <Button sx={{ color: "#45a736", textTransform: "none" }}>
                  <b>
                    View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                  </b>
                </Button>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "70px",
              }}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={vitaHealth}
                  alt="vitaHealth"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Vita Health
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>Tajikistan</b>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "70px",
              }}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={yourFitIQ}
                  alt="yourFitIQ"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Your Fit IQ
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>Monaco</b>
                </Typography>
              </div>
            </Grid>
            <Grid item sm={2.2} sx={{ textAlign: "center", marginTop: "36px" }}>
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={clearwellHealth}
                  alt="clearwellHealth"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Clear Well Health
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>Saint Barthélemy</b>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box> */}

        <Box sx={{ margin: "auto", width: "1300px" }}>
          <Grid container sx={{ marginTop: "150px" }}>
            <Grid item sm={3.1} sx={{ marginRight: "33px" }}>
              <div>
                <p
                  style={{
                    fontSize: "42px",
                    fontWeight: 600,
                    fontFamily: "poppins semi",
                    marginBottom: 0,
                  }}
                >
                  Browser by <br /> Payers
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    fontFamily: "poppins thin",
                    color: "#858585",
                    marginTop: 0,
                  }}
                >
                  <b>
                    lorem ipsum is a simple <br /> dummy text used
                  </b>
                </p>
              </div>
              <div>
                <Button
                  onClick={() => navigate("/payers")}
                  sx={{ color: "#45a736", textTransform: "none" }}
                >
                  <b>
                    View More <span style={{ marginLeft: "6px" }}>&gt;</span>
                  </b>
                </Button>
              </div>
            </Grid>
            {/* <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "82px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/payers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                {/* <img src={imageA} alt="AetnaImage " className="overlay-image" />
                 */}
            {/* <img src={bgImage} alt="bgImage " className="overlay-image" />
                <p className="overlay-letter">A</p>
              </div> */}
            {/* <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Aetna of NY
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                marginRight: "82px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/payers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={imageU}
                  alt="Unifiedhealth"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Unified Health Group of NY
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={2.2}
              sx={{
                textAlign: "center",
                marginTop: "36px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/payers")}
            >
              <div className="image-container">
                <img src={Ellipse} alt="ellispe" className="background-image" />
                <img
                  src={imageE}
                  alt="Emblemhealth"
                  className="overlay-image"
                />
              </div>
              <div>
                <Typography
                  sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                >
                  Emblem Health
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ color: "#959696", fontFamily: "poppins thin" }}
                >
                  <b>New York</b>
                </Typography>
              </div>
            </Grid>  */}

            {payer.popularPayers?.map((payer) => (
              <Grid
                key={payer.uuid}
                item
                sm={2.2}
                sx={{
                  textAlign: "center",
                  marginTop: "36px",
                  marginRight: "70px",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/comingsoon?id=${payer.uuid}`)}
              >
                <div className="image-container">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    className="background-image"
                  />
                  {payer.logo_url === "" || payer.logo_url === null ? (
                    <>
                      <img
                        src={bgImage}
                        alt="bgImage "
                        className="overlay-image"
                      />
                      <p className="overlay-letter"> {payer.name[0]}</p>
                    </>
                  ) : (
                    <img
                      src={payer.logo_url}
                      alt={`${payer.name} Image`}
                      className="overlay-image"
                    />
                  )}
                </div>
                <div>
                  <Typography
                    sx={{ color: "#02363d", fontFamily: "poppins semi" }}
                  >
                    {payer.name}
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{ color: "#959696", fontFamily: "poppins thin" }}
                  >
                    <b>{payer.location}</b>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid item sm={12} sx={{ position: "relative", bottom: "-160px" }}>
          {/* <img src={homeFooter} alt="homefooter" /> */}
          <div
            className="ads-container"
            style={{
              position: "relative",
              height: "421px",
            }}
          >
            <img
              src={FooterImage}
              alt="FooterImage"
              style={{ position: "absolute", top: "-73px" }}
            />

            <div
              className="ads-text"
              style={{ position: "absolute", left: "555px", top: "122px" }}
            >
              <p className="ads-subtext1">GET IN TOUCH</p>
              <p className="ads-subtext2">
                We Provide the best Medical Service for you
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default CardGrid;

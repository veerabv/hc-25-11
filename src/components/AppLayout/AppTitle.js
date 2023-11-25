import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../Assets/Static/logo1.png";
import HomeBanner from "../../Assets/Static/HomeBanner.png";
// import Doctor from "../../Assets/Static/Doctor.png";
import FemaleBannerImage from "../../Assets/Static/FemaleBannerImage.png";
import { Grid } from "@mui/material";
import HomeSearch from "../Search/HomeSearch";
import { useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

const AppTitle = (props) => {
  const navigate = useNavigate();
  const [header, setHeader] = React.useState(false);

  React.useEffect(() => {
    const head = window.location.href.split("/")[3];

    if (head === "" || props?.value !== false) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, [props]);

  return (
    <Box>
      {header ? (
        <AppBar
          position="static"
          // style={{ backgroundColor: "#45A736", backgroundImage: { HomeBanner } }}
          style={{
            backgroundImage: `url(${HomeBanner})`,
            // backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // width: "100%",
            backgroundColor: header ? "#45a736" : "#45a736",
            minHeight: "92px",
          }}
        >
          <Toolbar
            sx={{
              margin: "auto",
              width: "1290px",
              marginTop: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="logo" />
            </IconButton>

            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Typography> */}
            <div>
              <Button
                color="inherit"
                sx={{
                  //ml: "515px",
                  //mr: "25px",
                  textTransform: "none",
                  fontFamily: "poppins semi",
                  fontSize: "16px",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  //ml: "15px",
                  // mr: "25px",
                  textTransform: "none",
                  fontFamily: "poppins semi",
                  fontSize: "16px",
                }}
              >
                About Us
              </Button>
              {/* <Button
            color="inherit"
            sx={{
              ml: "15px",
              mr: "25px",
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "16px",
            }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            sx={{
              ml: "15px",
              mr: "25px",
              border: "1px solid #fff",
              textTransform: "none",
              fontFamily: "poppins semi",
              fontSize: "16px",
              borderRadius: "25px",
              minWidth: "102px !important",
            }}
          >
            Login
          </Button> */}
            </div>
          </Toolbar>
          <Grid
            container
            sx={
              {
                // display: "flex",
                // justifyContent: "space-between",
                // margin: "auto",
                // width: "1300px",
              }
            }
          >
            <Grid
              item
              sx={{
                display: "flex",
                margin: "auto",
                justifyContent: "space-between",
                width: "1300px",
              }}
            >
              <div style={{ paddingTop: "45px" }}>
                <p>
                  <span style={{ fontSize: "54px", fontFamily: "poppins" }}>
                    <b>
                      Your Path <br /> to Wellness
                    </b>
                  </span>
                </p>
                <p>
                  <span style={{ color: "#2A3D53", fontSize: "20px" }}>
                    <b>
                      Commited to Wellness - where Your <br /> wellbeing Comes
                      First
                    </b>
                  </span>
                </p>
              </div>
              <img src={FemaleBannerImage} alt="logo" />
              <p
                style={{
                  textAlign: "right",
                  fontFamily: "poppins",
                  paddingTop: "45px",
                }}
              >
                <span style={{ fontSize: "54px" }}>We Care for</span>
                <br />
                <span style={{ fontSize: "54px" }}>Your</span>
                <br />
                <span style={{ fontSize: "54px" }}>Health</span>
              </p>
            </Grid>
            <Grid
              item
              sx={{
                position: "absolute",
                top: 490,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <HomeSearch />
            </Grid>
          </Grid>
        </AppBar>
      ) : (
        // <Grid style={{ backgroundColor: "#45A736" }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#45A736", minHeight: "92px" }}

          // style={{
          //   backgroundImage: `url(${HomeBanner})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   width: "100%",
          // }}
        >
          <Toolbar
            sx={{
              margin: "auto",
              width: "1300px",
              backgroundColor: "#45A736",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="logo" />
            </IconButton>

            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Typography> */}
            <div>
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontFamily: "poppins semi",
                  fontSize: "16px",
                  color: "white",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  // ml: "15px",
                  // mr: "5px",
                  textTransform: "none",
                  fontFamily: "poppins semi",
                  fontSize: "16px",
                  color: "white",
                }}
              >
                About Us
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        // </Grid>
      )}
    </Box>
  );
};

export default AppTitle;

//top: 490, left: 470

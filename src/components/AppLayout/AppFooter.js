import React from "react";
import "../../Assets/css/AppFooter.css";
import brandPic from "../../Assets/Static/Logo (2).png";
import facebook from "../../Assets/Static/facebook.png";
import instagram from "../../Assets/Static/instagram.png";
import linkedIn from "../../Assets/Static/linkedIn.png";
import x from "../../Assets/Static/x.png";
import youtube from "../../Assets/Static/youtube.png";
// import homeFooter from "../../Assets/Static/homeFooter.png";
import "../../Assets/css/HomeFooter.css";
import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppFooter = () => {
  const navigate = useNavigate();
  const [footer, setFooter] = React.useState(false);

  React.useEffect(() => {
    const foot = window.location.href.split("/")[3];

    if (foot === "") {
      setFooter(true);
    } else {
      setFooter(false);
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid container sx={{ margin: "auto", width: "1300px" }}></Grid>
        <div
          className="AppFooter-wrapper"
          style={{ paddingTop: footer ? "11%" : "2%" }}
        >
          <section className="footerComp-1">
            <img src={brandPic} alt="Health care Dollar" />

            <p style={{fontFamily:"poppins semi"}}>
              We are a family centered practice that incorporates compassion and
              dedication to promote your well being
            </p>
          </section>
          <section className="footerComp-2">
            <h4>Main Menu 1</h4>

            <ul style={{ listStyleType: "none" }} className="menulist-handle">
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu1
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu2
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu3
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu4
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu5
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu6
              </li>
            </ul>
          </section>
          <section className="footerComp-3">
            <h4>Main Menu 2</h4>

            <ul style={{ listStyleType: "none" }} className="menulist-handle">
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu1
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu2
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu3
              </li>
              <li
                onClick={() => {
                  navigate("/comingsoon");
                }}
              >
                Sub Menu4
              </li>
            </ul>
          </section>
          <section className="footerComp-4">
            <h4>Contacts</h4>
            <div className="socialMedia-handler">
              <button>
                <img src={facebook} alt="facebook_Link" />
              </button>
              <button>
                <img src={x} alt="X_Link" />
              </button>
              <button>
                <img src={youtube} alt="youtube_Link" />
              </button>
              <button>
                <img src={instagram} alt="instagram_Link" />
              </button>

              <button>
                <img src={linkedIn} alt="linkedIn_Link" />
              </button>
            </div>
          </section>
        </div>
      </Box>
    </>
  );
};

export default AppFooter;

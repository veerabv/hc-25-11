import React from "react";
import { useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  // console.log(props, "////////////");
  const navigate = useNavigate();
  return <WrappedComponent {...props} navigate={navigate} />;
};

export default withRouter;

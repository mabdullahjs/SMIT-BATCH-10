import { Box } from "@mui/material";
import Loader from "../../components/Loader";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseMethod";

function ProtectedRoutes(props) {
  const { component } = props;

  //state
  const [loader, setLoader] = useState(true);

  //navigate
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoader(false);
        // console.log("user is login");
      } else {
        setLoader(true);
        navigate("/");
      }
    });
  });
  return (
    <>
      {loader ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30%" }}
        >
          <Loader />
        </Box>
      ) : (
        component
      )}
    </>
  );
}

export default ProtectedRoutes;
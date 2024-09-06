import { Box } from "@mui/material";
import React from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          padding: "3rem 6rem",
          background: "rgb(244, 246, 247)",
          minHeight: "82.25vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.8rem 6rem",
        flexWrap: "wrap",
      }}
    >
      <Typography
        sx={{ fontSize: "2.8rem", fontWeight: "bold", color: "#10B981" }}
      >
        Mix Master
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ textDecoration: "none", color: "black" }}
          component={NavLink}
        >
          Home
        </Typography>
        <Typography
          sx={{ textDecoration: "none", color: "black" }}
          component={NavLink}
          to="about"
        >
          About
        </Typography>
        <Typography
          sx={{ textDecoration: "none", color: "black" }}
          component={NavLink}
          to="news"
        >
          Newsletter
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

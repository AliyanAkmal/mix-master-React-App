import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../card/data";
import { makeStyles } from "@mui/styles";

const CardDetails = () => {
  const { id } = useParams();
  const arrayData = data[id];
  /////////////
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Box>
      <Box textAlign="center" p={4}>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{ background: "#10B981" }}
        >
          Back to home
        </Button>
        <Typography fontSize={30}>{arrayData.title}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "8rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "370px", width: "450px", borderRadius: "10px" }}>
          <img
            src={arrayData.image}
            alt="img"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box className={classes.typoBox}>
          <Typography className={classes.typo}>
            <span className={classes.span}> Name:</span>
            {arrayData.title}
          </Typography>
          <Typography className={classes.typo}>
            <span className={classes.span}>Category:</span>
            {arrayData.name}
          </Typography>
          <Typography className={classes.typo}>
            <span className={classes.span}> Info:</span>
            {arrayData.type}
          </Typography>
          <Typography className={classes.typo}>
            <span className={classes.span}>Glass:</span>
            {arrayData.glass}
          </Typography>
          <Typography className={classes.typo}>
            <span className={classes.span}>Ingredients: </span>
            {arrayData.ingredients}
          </Typography>
          <Typography className={classes.typo}>
            <span className={classes.span}>Instructions:</span>
            {arrayData.instructions}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;

const useStyles = makeStyles((theme) => ({
  typo: {
    fontWeight: "bold",
    lineHeight: "3em !important",
  },

  span: {
    backgroundColor: "#6EE7B7",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
}));

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/input/input";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const NewsLetter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  ////////////////////////////////
  const validate = (values) => {
    const error = {};
    if (!values.name) {
      error.name = "Please provide a name";
    }
    if (!values.password) {
      error.password = "Please provide a password";
    }
    if (!values.email) {
      error.email = "Please enter a valid email address";
    }
    return error;
  };

  ///////////////////////////////
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (
          values.name === "aliyan" &&
          values.password === "password" &&
          values.email === "aliyanakmal2002@gmail.com"
        ) {
          alert("Success!");
          navigate("/");
        } else {
          alert("incorrect values");
        }
      }, 3000);
    },
  });
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          background: "white",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 4rem",
          gap: "1.5rem",
        }}
      >
        <Typography textAlign="center" fontSize={35} textTransform="capitalize">
          our newsletter
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            handleNewInput={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
          />
          {formik.errors.name ? (
            <Typography fontSize="12px" color="red">
              {formik.errors.name}
            </Typography>
          ) : null}
          <Input
            name="password"
            handleNewInput={formik.handleChange}
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formik.values.password}
            error={formik.errors.password}
          />
          {formik.errors.password ? (
            <Typography color="red" fontSize="12px">
              {formik.errors.password}
            </Typography>
          ) : null}
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="john123@example.com"
            handleNewInput={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          {formik.errors.email ? (
            <Typography color="red" fontSize="12px">
              {formik.errors.email}
            </Typography>
          ) : null}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ background: "#10B981" }}
        >
          {loading ? <CircularProgress /> : "Submit"}
        </Button>
      </form>
    </Box>
  );
};

export default NewsLetter;

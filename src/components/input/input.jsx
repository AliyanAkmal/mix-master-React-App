import { InputBase, Typography } from "@mui/material";
import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  handleNewInput,
  name,
  value,
  error,
}) => {
  return (
    <>
      <Typography>{label}</Typography>
      <InputBase
        name={name}
        onChange={handleNewInput}
        sx={{
          width: "100%",
          border: "1px solid rgb(234, 238, 242)",
          background: "#F4F6F7",
          padding: "1px 10px",
        }}
        placeholder={placeholder}
        type={type}
        value={value}
        error={error}
      />
    </>
  );
};

export default Input;

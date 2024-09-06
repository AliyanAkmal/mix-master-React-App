import { Box, Button, InputBase } from "@mui/material";
import React from "react";

const SearchInput = ({ handleSearch, handleSearchButton }) => {
  return (
    <Box
      sx={{
        padding: "2rem 3rem",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40vw",
        borderRadius: "5px",
      }}
    >
      <InputBase
        type="search"
        variant="filled"
        onChange={handleSearch}
        sx={{
          background: "rgb(244, 246, 247)",
          border: "1px solid rgb(234, 238, 242)",
          padding: "1px 8px",
          width: "100%",
          borderRadius: "5px 0px 0px 5px",
        }}
      />
      <Button
        variant="contained"
        sx={{ background: "#047857", borderRadius: "0px 5px 5px 0px" }}
        onClick={handleSearchButton}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchInput;

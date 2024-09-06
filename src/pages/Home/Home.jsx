import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchInput from "../../components/search";
import ShowCard from "../../components/card";
import data from "../../components/card/data";

const Home = () => {
  const [input, setIput] = useState("");
  const [search, setSearch] = useState("");
  const filteredArray = data.filter((value) => {
    return value.title.toLowerCase().includes(search.toLowerCase());
  });
  const handleSearch = (e) => {
    setIput(e.target.value);
  };
  const handleSearchButton = () => {
    setSearch(input);
  };
  ////////////////////////

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3rem",
        }}
      >
        <SearchInput
          handleSearch={handleSearch}
          handleSearchButton={handleSearchButton}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
        }}
        pt={8}
      >
        {filteredArray.map((data, index) => {
          return <ShowCard key={index} {...data} index={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Home;

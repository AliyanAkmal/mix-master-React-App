import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <Typography fontSize={30} lineHeight={3}>
        About Us
      </Typography>
      <Typography lineHeight={2} color="gray">
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </Typography>
    </Box>
  );
};

export default About;

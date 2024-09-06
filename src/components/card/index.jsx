import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
const ShowCard = ({ image, title, name, type, index }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/${index}`);
  };
  return (
    <Card sx={{ width: "330px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ pb: 2 }}>
        <Button
          size="small"
          variant="contained"
          onClick={handleDetails}
          sx={{ background: "#10B981" }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShowCard;

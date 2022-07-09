import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import CategoryCard from "../components/Home/CategoryCard";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    backgroundImage: 'url("bg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    // alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: 'url("bg_portrait.jpg")',
    },
  },

  heading: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },

  subHeading: {
    fontWeight: "100",
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          className={classes.heading}
        >
          Shoe Store
        </Typography>
        <Typography
          variant="h4"
          color="primary"
          align="center"
          className={classes.subHeading}
        >
          streetwear / lifestyle / sports
        </Typography>
        <div className={classes.cardContainer}>
          <CategoryCard
            name="Men"
            imageURL="https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg"
            onClick={() => navigate("/men")}
          />
          <CategoryCard
            name="Women"
            imageURL="https://cdn.shopify.com/s/files/1/0102/6700/0891/files/DFCEB53C-CFF0-4CB7-9228-F3621B39B394_x800.jpg?v=1634896340"
            onClick={() => navigate("/women")}
          />
          <CategoryCard
            name="Kids"
            imageURL="https://cdn.shopify.com/s/files/1/2541/5718/products/product-image-327426219_1200x1200.jpg"
            onClick={() => navigate("/kids")}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;

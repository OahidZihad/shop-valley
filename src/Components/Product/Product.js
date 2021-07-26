import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    margin: "8px",
    color: theme.palette.text.secondary,
  },
  grid: {
    display: "flex",
    // gridTemplateRow: "autoFit",
    // gridAutoRows: "1fr",
    marginLeft: "45px",
    marginRight: "45px",
    justifyContent: "space-between",
  },
}));

const Product = (props) => {
  const { name, weight, price, imageUrl } = props.product;
  const classes = useStyles();
  return (
    <Grid>
      <Paper className={classes.paper}>
        <img
          style={{ height: "300px" }}
          // src={require(`../../images/${pic}`).default}
          src={imageUrl}
          alt=""
        />
        <h2 style={{ fontWeight: "700" }}>{name}</h2>
        {/* <Grid spacing={1}> */}
        {/* <Grid item xs={12}> */}
        <div className={classes.grid}>
          <h3 style={{ fontSize: "25px", color: "limegreen" }}>${price}</h3>
          <Button
            style={{
              backgroundColor: "limegreen",
              color: "white",
              marginTop: "25px",
              //   marginLeft: "25px",
              marginBottom: "25px",
            }}
          >
            Buy Now
          </Button>
        </div>

        {/* </Grid> */}
        {/* </Grid> */}
      </Paper>
    </Grid>
  );
};

export default Product;

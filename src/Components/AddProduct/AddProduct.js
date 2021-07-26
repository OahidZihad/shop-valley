import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "0f9bd7426c2b386f5749a7354a3a5a8f");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        console.log(res);
        setImageUrl(res.data.data.display_url);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    const productData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageUrl: imageUrl,
    };
    console.log(productData);
    const url = "http://localhost:4000/addProduct";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("Server side response", res));
  };

  const handleSubmit2 = (event) => {
    console.log(event, "data");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Add Product
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
          align="center"
          justifyContent="center"
        >
          Fresh Valley
          <div className={classes.appBarSpacer} />
          <Divider />
          <List>Manage Product</List>
          <Divider />
          <List>Add Product</List>
          <Divider />
          <List>Edit Product</List>
        </Typography>
        <Divider />
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  Product Name
                  <div>
                    <br />
                  </div>
                  {/* <TextField
                    placeholder=" Enter Name"
                    {...register("name")}
                    required
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  /> */}
                  <input
                    placeholder=" Enter Name"
                    {...register("name")}
                    required
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  Weight{" "}
                  <div>
                    <br />
                  </div>
                  {/* <TextField
                    placeholder=" Enter Weight"
                    {...register("weight")}
                    required
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  /> */}
                  <input
                    placeholder=" Enter Weight"
                    {...register("weight")}
                    required
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  Add Price{" "}
                  <div>
                    <br />
                  </div>
                  {/* <TextField
                    placeholder=" Enter Price"
                    {...register("price")}
                    required
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  /> */}
                  <input
                    placeholder=" Enter Price"
                    {...register("price")}
                    required
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  Add Photo
                  <div>
                    <br />
                  </div>
                  {/* <TextField
                    // placeholder=" Enter Name"
                    // {...register("name")}
                    name="exampleRequired"
                    type="file"
                    onChange={handleImageUpload}
                    required
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                  /> */}
                  <input
                    name="exampleRequired"
                    type="file"
                    onChange={handleImageUpload}
                    required
                  />
                </Paper>
              </Grid>
              <Grid item xs={6} sm={11}></Grid>
              <input onClick={handleSubmit2} type="submit" />

              {/* <Button
                size="small"
                type="submit"
                color="primary"
                variant="contained"
              >
                Submit
              </Button> */}
            </Grid>
          </form>
        </Container>
      </main>
    </div>
  );
};

export default AddProduct;

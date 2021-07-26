import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: "600",
    fontSize: "25px",
    marginLeft: "20px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            SHOP VALLEY
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                marginRight: "15px",
              }}
            >
              Home
            </Button>
            <Button
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                marginRight: "15px",
              }}
            >
              Orders
            </Button>
            <Button
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                marginRight: "15px",
              }}
            >
              Admin
            </Button>
            <Button
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                marginRight: "15px",
              }}
            >
              Deals
            </Button>
            <Button
              style={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                textTransform: "none",
                marginRight: "10px",
              }}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {},
  FirstList: {
    width: "100%",
    marginTop: 50
  },
  List: {
    width: "100%"
  },
  ListItem: {
    padding: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 20
  },
  menuLink: {
    marginLeft: 20
  },
  baseline: {
    alignItems: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  test: {
    backgroundColor: "red"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  MetaData: {
    width: "15%"
  },
  Body: {
    display: "flex"
  },
  Title: {
    marginTop: 30,
    fontSize: 50,
  }
});

class ButtonAppBar extends React.Component {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.baseline}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Test Name
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
            <Button color="inherit" className={classes.menuLink}>
              Login
            </Button>
            <Button color="inherit" className={classes.menuLink}>
              Discussion
            </Button>
            <Button color="inherit" className={classes.menuLink}>
              Upload
            </Button>
            <Button color="inherit" className={classes.menuLink}>
              Earn
            </Button>
            <Button color="inherit" className={classes.menuLink}>
              Donate
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.Body}>
          <div className={classes.MetaData}>
            <List component="nav" className={classes.FirstList}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Tag List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="1 thighhighs" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="3 dummytag" />
              </ListItem>
            </List>
            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Character List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="6 clownpiece" />
              </ListItem>
            </List>
            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Charactistics List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="7 regular outfit" />
              </ListItem>
            </List>

            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Artist List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="4 dummyartist" />
              </ListItem>
            </List>
            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="IP's List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="5 touhou" />
              </ListItem>
            </List>

            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Info Tag List" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="8 Jpeg" />
              </ListItem>
            </List>
            <List component="nav" className={classes.List}>
              <ListItem dense className={classes.ListItem}>
                <ListItemIcon />
                <ListItemText inset primary="Image Info" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="Source: https://test.com" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="Resolution: disabled" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="Posted By: Anonymous" />
              </ListItem>
              <ListItem dense button>
                <ListItemText inset primary="Posted At: 2018-08-10 18:24:02" />
              </ListItem>
            </List>
          </div>
          <Typography className={classes.Title} variant="h2" color="inherit">
          clown piece
          </Typography>
        </div>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

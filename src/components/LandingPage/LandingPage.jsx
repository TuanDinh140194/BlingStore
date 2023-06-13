import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, ShoppingCart, ContactMail } from "@material-ui/icons";
import useStyles from "./styles";

const LandingPage = () => {
  const classes = useStyles();
 
  const handleClickScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" className={classes.logo}>
            BlingBling
          </IconButton>

          <div>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div className={classes.infoContainer}>
              <Typography variant="h4" text="bold" gutterBottom>
                Welcome to Our Online Store
              </Typography>
              <Typography variant="body1" paragraph>
                Discover a wide range of high-quality products for all your
                needs.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/store"
                className={classes.shopNowButton}
              >
                <ShoppingCart />
                Shop Now
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                onClick={handleClickScroll}
                className={classes.contactButton}
              >
                <ContactMail className={classes.contactIcon}/>
                   Contact
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* <div className={classes.contactFormContainer}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                className={classes.formTextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className={classes.formTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                className={classes.formTextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div> */}
      <div id="contact"  className={classes.content2}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.contactFormCard}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <form >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className={classes.formTextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className={classes.formTextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={4}
                        className={classes.formTextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}  >
            <Card className={classes.aboutUsCard}>
              <CardContent>
                <Typography variant="h4" text="bold" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac quam eu massa elementum sodales id vel velit. Quisque ac
                  vestibulum lorem, sed consectetur ligula.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.footer}>
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} BlingBling. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default LandingPage;

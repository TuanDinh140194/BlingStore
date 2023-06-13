import { makeStyles } from "@material-ui/core/styles";
import imageBack from "../../assets/bg-coworking.jpeg"

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "absolute", // Position the navbar absolutely
    width: "100%", // Occupy the full width
    zIndex: 1, // Ensure the navbar appears above the background image
  },
  toolbar: {
    justifyContent: "space-between",
    padding: theme.spacing(2, 4),
    minHeight: 100,
  },

  content: {
    minHeight: "calc(100vh - 64px)",
    background: `url(${imageBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden", // Hide the overflow of the content
    backgroundBlendMode: "lighten", // Blend the white background with the image
},

content2: {
  minHeight: "calc(100vh - 64px)",
  backgroundColor: "grey",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  backgroundBlendMode: "lighten",
},

contactFormCard: {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  margin: "20px",
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.common.black,
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  },
},

contactIcon:{
  marginRight: "10px"
},

aboutUsCard: {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: theme.spacing(4),
  margin: "20px",
  textAlign: "center",
  color: theme.palette.common.black,
  borderRadius: theme.spacing(2),
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  },
},

footer: {
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
},

logo: {
  backgroundColor: "rgba(85, 172, 238, 0.3)",
  padding: theme.spacing(1),
  textAlign: "center",
  color:"white",
  borderRadius: theme.spacing(2),
  "&:hover": {
    backgroundColor: "rgba(85, 172, 238, 0.7)",
  },
},

  infoContainer: {
    backgroundColor: "rgba(150, 150, 150, 0.4)",
    padding: theme.spacing(4),
    textAlign: "center",
    color:"white"
  },
  shopNowButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    transition: "all 0.3s",
    border: `2px solid ${theme.palette.common.white}`,
    borderRadius: theme.spacing(2),
    backgroundColor: "transparent",
    color: theme.palette.common.main,
    fontWeight: 600,
    padding: theme.spacing(1, 4),
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "grey",
    },
  },
  contactButton: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    transition: "all 0.3s",
    borderRadius: theme.spacing(2),
    backgroundColor: "transparent",
    color: theme.palette.common.main,
    fontWeight: 600,
    padding: theme.spacing(1, 4),
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: "grey",
    },
  },
  contactFormContainer: {
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    textAlign: "center",
    position: "relative",
    marginTop: -50, // Adjust the negative margin to overlap the first part
    zIndex: 2, // Ensure the contact form is positioned above the first part
  },
  formTextField: {
    marginBottom: theme.spacing(2),
  },
}));

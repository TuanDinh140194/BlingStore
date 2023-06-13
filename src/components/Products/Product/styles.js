import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    height: "100%",
    borderRadius: "10px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)", // Enhanced shadow
    transform: "translateY(-10px)", // Increased Y-axis translation for a stronger raised effect
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Added transition for smooth hover effect
    "&:hover": {
      transform: "translateY(-10px) scale(1.02)", // Scale up the card on hover
      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.2)", // Adjusted shadow on hover
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "auto",
  },
  modalContent: {
    position: "relative",
    backgroundColor: theme.palette.background.default,
    outline: "none",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
    maxWidth: "600px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.grey[800],
    },
  },
  modalImages: {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    padding: `${theme.spacing(2)}px 0`,
    marginBottom: theme.spacing(2),
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "400px",
    objectFit: "contain",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
    color: "grey", // Custom title color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Custom title text shadow
  },
  addToCartButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "grey", // Custom button background color
    color: "#FFFFFF", // Custom button text color
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0px 3px 10px rgba(0, 0, 0, 0.2)`,
    "&:hover": {
      backgroundColor: "#55acee", // Custom button background color on hover
    },
  },
  modalImageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  modalImageSwitchButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    padding: theme.spacing(1),
    zIndex: 1,
  },
  modalLeftButton: {
    left: 0,
  },
  modalRightButton: {
    right: 0,
  },
}));

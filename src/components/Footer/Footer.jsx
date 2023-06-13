// /**
// =========================================================
// * Material Kit 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-kit-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// // @mui material components
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import GitHubIcon from "@mui/icons-material/GitHub";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// function CenteredFooter({ company, links, socials, light }) {
//   const { href, name } = company;

//   const year = new Date().getFullYear();

//   const renderLinks = links.map((link) => (
//     <MKTypography
//       key={link.name}
//       component={Link}
//       href={link.href}
//       variant="body2"
//       color={light ? "white" : "secondary"}
//       fontWeight="regular"
//     >
//       {link.name}
//     </MKTypography>
//   ));

//   const renderSocials = socials.map((social) => (
//     <MKTypography
//       key={social.link}
//       component={Link}
//       href={social.link}
//       variant="body2"
//       color={light ? "white" : "secondary"}
//       fontWeight="regular"
//     >
//       {social.icon}
//     </MKTypography>
//   ));

//   return (
//     <MKBox component="footer" py={6}>
//       <Grid container justifyContent="center">
//         <Grid item xs={10} lg={8}>
//           <Stack
//             direction="row"
//             flexWrap="wrap"
//             justifyContent="center"
//             spacing={{ xs: 2, lg: 3, xl: 6 }}
//             mb={3}
//           >
//             {renderLinks}
//           </Stack>
//         </Grid>
//         <Grid item xs={12} lg={8}>
//           <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
//             {renderSocials}
//           </Stack>
//         </Grid>
//         <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
//           <MKTypography variant="body2" color={light ? "white" : "secondary"}>
//             Copyright &copy; {year} Material by{" "}
//             <MKTypography
//               component={Link}
//               href={href}
//               target="_blank"
//               rel="noreferrer"
//               variant="body2"
//               color={light ? "white" : "secondary"}
//             >
//               {name}
//             </MKTypography>
//             .
//           </MKTypography>
//         </Grid>
//       </Grid>
//     </MKBox>
//   );
// }

// // Setting default values for the props of CenteredFooter
// CenteredFooter.defaultProps = {
//   company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
//   links: [
//     { href: "https://www.creative-tim.com/", name: "Company" },
//     { href: "https://www.creative-tim.com/presentation", name: "About Us" },
//     { href: "https://www.creative-tim.com/presentation", name: "Team" },
//     { href: "https://www.creative-tim.com/templates/react", name: "Products" },
//     { href: "https://www.creative-tim.com/blog", name: "Blog" },
//     { href: "https://www.creative-tim.com/license", name: "License" },
//   ],
//   socials: [
//     { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
//     {
//       icon: <TwitterIcon fontSize="small" />,
//       link: "https://twitter.com/creativetim",
//     },
//     {
//       icon: <InstagramIcon fontSize="small" />,
//       link: "https://www.instagram.com/creativetimofficial/",
//     },
//     {
//       icon: <PinterestIcon fontSize="small" />,
//       link: "https://ro.pinterest.com/thecreativetim/",
//     },
//     { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/creativetimofficial" },
//   ],
//   light: false,
// };

// // Typechecking props for the CenteredFooter
// CenteredFooter.propTypes = {
//   company: PropTypes.objectOf(PropTypes.string),
//   links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
//   socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
//   light: PropTypes.bool,
// };

// export default CenteredFooter;

import React from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../../assets/commerce.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    brand: { image: logo, width: 40 },
    copy: "© All rights reserved.",
    link1: "Home",
    link2: "Contact",
    link3: "About Us",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="BlingStore"
        width={content.brand.width}
        text="Bling Store"
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <footer className={classes.container}>
      <Container maxWidth="lg">
        <Box
          py={8}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Box className={classes.footerImg}>
            <Typography
              component={Link}
              to="/store"
              variant="h6"
              color="textSecondary"
              className={classes.title}
            >
              <Link
                className={classes.footerName}
                component={Link}
                to="/"
                color="inherit"
                underline="none"
              >
                {brand}
              </Link>
              BlingStore
            </Typography>
          </Box>
          <Box className={classes.footerNav}>
            <Link className={classes.footerIcon}>
              <Facebook />
            </Link>
            <Link className={classes.footerIcon}>
              <Twitter />
            </Link>
            <Link className={classes.footerIcon}>
              <Instagram />
            </Link>
            <Link className={classes.footerIcon}>
              <LinkedIn />
            </Link>
          </Box>

          <Box component="nav" className={classes.footerNav}>
            <Link
              component={Link}
              to="/"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
              underline="none"
            >
              {content["link1"]}
            </Link>
            <Link
              to="/"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
              underline="none"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  // 👇 Will scroll smoothly to the top of the next section
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {content["link2"]}
            </Link>
            <Link
              to="/"
              variant="body1"
              color="textPrimary"
              className={classes.footerLink}
              underline="none"
            >
              {content["link3"]}
            </Link>
          </Box>
          <Box>
            <Typography
              className={classes.footerText}
              color="textSecondary"
              component="p"
              variant="caption"
              gutterBottom={false}
            >
              {content["copy"]}
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

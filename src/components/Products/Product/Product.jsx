import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Modal,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";
import {
  Close,
  AddShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([]);

  const handleOpen = async () => {
    await productAsset(product.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handleBackdropClick = () => {
    handleClose();
  };
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  const productAsset = async (productId) => {
    try {
      const product = await commerce.products.retrieve(productId);
      const images = product.assets.map((asset) => asset.url);
      setImages(images);
    } catch (error) {
      console.error("Error retrieving product:", error);
      setImages([]); // Set an empty array in case of error to avoid 'undefined' issues
    }
  };

  return product ? (
    <>
      <Card className={classes.root} onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton
            aria-label="Add to Cart"
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Backdrop open={open} onClick={handleBackdropClick}>
          <div className={classes.modalContainer} onClick={handleContentClick}>
            <div className={classes.modalContent}>
              <IconButton
                className={classes.closeButton}
                aria-label="Close Modal"
                onClick={handleClose}
              >
                <Close />
              </IconButton>
              <Typography
                className={classes.modalTitle}
                variant="h6"
                gutterBottom
              >
                {product.name}
              </Typography>

              <div className={classes.modalImageContainer}>
                <IconButton
                  className={`${classes.modalImageSwitchButton} ${classes.modalLeftButton}`}
                  aria-label="Previous Image"
                  disabled={images.length <= 1}
                  onClick={handlePreviousImage}
                >
                  <ChevronLeft />
                </IconButton>
                <img
                  src={images[currentImage]}
                  alt={images[currentImage]}
                  className={classes.modalImage}
                />
                <IconButton
                  className={`${classes.modalImageSwitchButton} ${classes.modalRightButton}`}
                  aria-label="Next Image"
                  disabled={images.length <= 1}
                  onClick={handleNextImage}
                >
                  <ChevronRight />
                </IconButton>
              </div>
              <Typography
                variant="body1"
                color="textSecondary"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <Typography variant="h6">
                Price: {product.price.formatted_with_symbol}
              </Typography>
              <IconButton
                aria-label="Add to Cart"
                onClick={() => onAddToCart(product.id, 1)}
                className={classes.addToCartButton}
              >
                <AddShoppingCart />
                Add to Cart
              </IconButton>
            </div>
          </div>
        </Backdrop>
      </Modal>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress/>
    </div>
  );
};

export default Product;

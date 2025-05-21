import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Rating,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 2 }}>
            <CardMedia
              component="img"
              height="350"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: "contain" }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            {product.description}
          </Typography>

          <Typography variant="h6" color="primary" fontWeight={600}>
            ${product.price.toFixed(2)}
          </Typography>

          <Box display="flex" alignItems="center" mt={1} mb={3}>
            <Rating
              name="product-rating"
              value={product.rating.rate}
              precision={0.1}
              readOnly
            />
            <Typography variant="body2" color="text.secondary" ml={1}>
              ({product.rating.count} reviews)
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              addToCart(product);
              navigate("/");
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;

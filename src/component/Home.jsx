import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Grid, Box, Typography, CircularProgress } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>

  <Grid 
  container 
  spacing={4} 
  justifyContent="center" 
  alignItems="center"
  sx={{ minHeight: '100vh' }} 
  mt={4}
>
  {products.map((product) => (
    <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>

</Box>

  );
};

export default Home;

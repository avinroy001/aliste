import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Box,
} from "@mui/material";

const ProductCard=({ product })=> {
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {product.title}
        </Typography>

        <Typography variant="body1" color="text.primary" fontWeight={500}>
          ${product.price.toFixed(2)}
        </Typography>

        <Box display="flex" alignItems="center" mt={1}>
          <Rating
            name="read-only-rating"
            value={product.rating.rate}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            ({product.rating.count})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
export default ProductCard

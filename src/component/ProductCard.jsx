import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardActionArea
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}
      >
        <Box
          sx={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="subtitle1" noWrap>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            ${product.price.toFixed(2)}
          </Typography>
          <Rating value={product.rating.rate} precision={0.1} readOnly size="small" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;

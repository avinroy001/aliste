import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Badge } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            E-Shop
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={RouterLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={RouterLink} to="/cart" color="inherit">
              <Badge badgeContent={cart.length} color="secondary">
                Cart
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

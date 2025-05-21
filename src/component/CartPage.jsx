import { Box, Typography, IconButton, TextField, Divider } from "@mui/material";
import { useCart } from "./CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography>No items in cart.</Typography>
      ) : (
        cart.map((item) => (
          <Box key={item.id} mb={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <img src={item.image} alt={item.title} width="80" />
              <Box flex={1}>
                <Typography>{item.title}</Typography>
                <Typography>${item.price.toFixed(2)}</Typography>
              </Box>
              <TextField
                type="number"
                value={item.quantity}
                size="small"
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                inputProps={{ min: 1 }}
                sx={{ width: 80 }}
              />
              <IconButton onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
            <Divider sx={{ mt: 1, mb: 1 }} />
          </Box>
        ))
      )}
      {cart.length > 0 && (
        <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
      )}
    </Box>
  );
}
export default CartPage


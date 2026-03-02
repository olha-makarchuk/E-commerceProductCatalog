import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import {
  ListItem,
  Box,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({ item, onRemove }) {
  const { updateQuantity } = useContext(CartContext);
  const [open, setOpen] = useState(true);

  const handleDelete = () => {
    setOpen(false);
    setTimeout(() => {
      onRemove();
    }, 300);
  };

  return (
    <Collapse in={open}>
      <ListItem divider>
        <Box display="flex" width="100%" alignItems="center">
          <img
            src={`https://picsum.photos/seed/${item.id}/80/100`}
            alt={item.name}
            style={{ borderRadius: 8, marginRight: 16 }}
          />

          <Box flex={1}>
            <Typography fontWeight={600}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price.toLocaleString()} ₴
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <IconButton
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
            >
              <RemoveIcon />
            </IconButton>

            <Typography>{item.quantity}</Typography>

            <IconButton
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Typography
            width={120}
            textAlign="right"
            fontWeight={600}
          >
            {(item.price * item.quantity).toLocaleString()} ₴
          </Typography>

          <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </ListItem>
    </Collapse>
  );
}

export default CartItem;
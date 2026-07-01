import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce Manager
        </Typography>

        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Orders</Button>
        <Button color="inherit">Categories</Button>
        <Button color="inherit">Customers</Button>

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
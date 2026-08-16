import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <AppBar
  position="static"
  elevation={0}
  sx={{
    backgroundColor: "#111827",
    borderRadius: "0 0 20px 20px",
    px: 2,
    mb: 3,
  }}
>
      <Toolbar sx={{ minHeight: 64 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Commerce Manager
        </Typography>

        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Products</Button>
        {/* <Button color="inherit">Orders</Button>
        <Button color="inherit">Categories</Button> */}
        {/* <Button color="inherit">Customers</Button> */}

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
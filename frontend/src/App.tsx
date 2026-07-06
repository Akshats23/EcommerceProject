import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import { Box } from "@mui/material";

function App() {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
            <Navbar />
            <Dashboard />
        </Box>
    );
}

export default App;
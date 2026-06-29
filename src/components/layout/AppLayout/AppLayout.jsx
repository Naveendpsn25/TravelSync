import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./AppLayout.css";

function AppLayout({ children }) {
  return (
    <Box className="app-layout">
      <Navbar />

      <Box component="main" className="app-layout-content">
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

export default AppLayout;
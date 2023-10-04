import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              React-Auth
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#6d1b7b" : "",
                };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="contact"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#6d1b7b" : "",
                };
              }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="login"
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#6d1b7b" : "",
                };
              }}
            >
              Login/Register
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

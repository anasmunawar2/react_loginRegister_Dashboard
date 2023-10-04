import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logged Out");
    navigate("/login");
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <Typography variant="h5">Email: abc@gmail.com</Typography>
          <Typography variant="h6">Name: User</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>

        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

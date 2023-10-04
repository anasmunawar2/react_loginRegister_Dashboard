import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("password-reset").reset();
        setError({
          status: true,
          msg: "Password Updated Successfully",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Password does not match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "Password does not match",
        type: "error",
      });
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              margin="normal"
              label="Password"
              type="password"
            />
            <TextField
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              margin="normal"
              label="Confirm Password"
              type="password"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Reset Password
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPasswordForm;

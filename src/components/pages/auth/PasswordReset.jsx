import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";

const PasswordReset = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };

    if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-form").reset();
      setError({
        status: true,
        msg: "Email Sent Successfully",
        type: "success",
      });
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
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              margin="normal"
              label="Email Address"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send Email
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

export default PasswordReset;

import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
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
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };

    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Successfully",
          type: "success",
        });
        navigate("/dashboard");
      } else {
        setError({
          status: true,
          msg: "Password does not match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id="name"
          name="name"
          margin="normal"
          label="Name"
        />
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          margin="normal"
          label="Email Address"
        />

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
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term & condition"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Register
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;

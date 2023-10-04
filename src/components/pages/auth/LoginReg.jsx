import { Grid, Card, Tabs, Tab, Box } from "@mui/material";
import Pic1 from "../../../images/pic1.png";
import { useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";

const TabPannel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value == index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container sx={{ height: "90vh" }}>
      <Grid
        item
        lg={7}
        sm={5}
        sx={{
          backgroundImage: `url(${Pic1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: { xs: "none", sm: "block" },
        }}
      ></Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ mx: 3 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  label="Login"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                ></Tab>
                <Tab
                  label="Register"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                ></Tab>
              </Tabs>
            </Box>
            <TabPannel value={value} index={0}>
              <UserLogin />
            </TabPannel>
            <TabPannel value={value} index={1}>
              <Registration />
            </TabPannel>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginReg;

import React, { Component } from "react";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome { }!
          </Typography>


        </Container>
      </Box>
    </div>
  );
};

class RenderHome extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
    );
  }
}

export default RenderHome;

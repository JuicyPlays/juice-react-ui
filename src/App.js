import React from 'react';
import NavBar from './pages/NavBar';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const appStyles = {
  background: 'linear-gradient(to bottom, #121212, #000000)',
  minHeight: '100vh',
};


function App() {
  return (
    <Router>
      <div style={appStyles}> {/* Apply the gradient background */}
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
        
      </ThemeProvider>
      </div>
    </Router>
  );
}


export default App;

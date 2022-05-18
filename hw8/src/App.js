//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
//import ReactDOM from 'react-dom';
import  TextField  from "@mui/material/TextField";
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <body>
        <TextField
            required
            id="outlined-required"
            label="E-mail"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />  
        <Button variant="contained">Sign in</Button>
      </body>
    </div>
  );
}

export default App;

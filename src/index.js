import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";
import { AuthContextProvider } from './store/auth-context';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  breakpoints: {
    values: {
      xxs :0,
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1500,
      custom: 1920,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#E0E3E7',
          '--TextField-brandBorderHoverColor': '#B2BAC2',
          '--TextField-brandBorderFocusedColor': '#c5cbd1',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },

    // MuiSelect: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: 'var(--TextField-brandBorderColor)',
    //     },
    //     outlined: {
    //       // Set the border color to match the focused color of the TextField
    //       borderColor: 'var(--TextField-brandBorderFocusedColor)',
    //       '&:hover': {
    //         borderColor: 'red',
    //         background : 'red'
    //       },
    //     },
       
    //     },
    //   },
    
    
    
  },
});

let persistor = persistStore(store);

root.render(
  
  <Provider store={store}>
  <AuthContextProvider>
  <ThemeProvider theme={theme}>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </ThemeProvider>
    </AuthContextProvider>
    </Provider>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

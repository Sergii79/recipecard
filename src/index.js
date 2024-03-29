import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import './index.css';

const theme = {
  colors: {
    // text: 'blue',
    accent: 'tomato',
    black: '#212121',
    white: '#fff',
    green: '#0db90d',
    red: '#ff0000',
    orange: '#ffa500',
    error: "red",
    grey: "#aa9f9f"
  },

  radii: {
    xs: '2px',
    sm: '5px',
    md: '10px',
    lg: '15px',
  },

  sizeIcon: {
    sm: '20px',
    md: '24px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

console.log("Hello!");

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const productPrice = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );







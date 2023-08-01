import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Cars from './Components/Cars'
import reportWebVitals from './reportWebVitals';
import ChildProvider from './Components/Child';
// import { render } from '@testing-library/react';


// // const cars=[
// //   {id:1,brand:"sherry"},
// //   {id:2,brand:"Ali"},
// //   {id:3,brand:"Bilal"}
// // ]
// const cars = ['Ford', 'BMW', 'Audi'];

const root = ReactDOM.createRoot(document.getElementById('sherry'));
root.render(
  <ChildProvider>

  <React.StrictMode>
    <App/>
  </React.StrictMode>

  </ChildProvider>

);


reportWebVitals();

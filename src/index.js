import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

  library.add( faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


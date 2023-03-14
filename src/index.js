import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import StateFullComponent from './container/StateFullComponent';
import HelloComponent from './component/HelloComponent';
import Cards from './component/cards';
import MenampilkanData from './component/database';
import Tombol from './component/tombol';

const clicked =() => {
  return alert("Thanksss!")
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Cards/>
      <StateFullComponent/>
      <HelloComponent/>
      <MenampilkanData/>
      <Tombol clicked={clicked}/>
    </>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

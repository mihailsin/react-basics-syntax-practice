// import React, { useLayoutEffect } from 'react';
import reactDom from 'react-dom';
import { unstable_createPortal } from 'react-dom/cjs/react-dom.development';
import App from './App';

// const element = React.createElement('h1', null, 'React.JS: Компоненты и коллекции');
// reactDom.render(element, document.getElementById('root'));
// console.log(element);

reactDom.render(<App />, document.querySelector('#root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

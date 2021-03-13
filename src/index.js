// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import DraggableList from './DragList';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
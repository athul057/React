import React from 'react';
import ReactDOM from 'react-dom/client'

const mainroot = React.createElement('div', { id: 'mainroot' },

 React.createElement('div', { id: 'child' },
  [React.createElement('h1', {}, "I am H12"),
  React.createElement('h2', {}, "I am H22")]


 )
)
const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);





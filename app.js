import React from 'react';
import ReactDOM from 'react-dom/client'


const mainroot = React.createElement('h1', { id: 'heading' }, 'hello world')

const jsxHeading = <h1>hello world from jsx</h1>
const main = ReactDOM.createRoot(document.getElementById('root'));


main.render(jsxHeading);



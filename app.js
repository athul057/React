
/**
 * 
 * <div id="root">
 * <div id="child">
 * 
 * <h1>Hi I am H1</h1>
 * <h2>Hi I am H2</h2>
 * 
 * </div>
 * 
 * 
 * </div>
 * 
 * 
 * </div>
 * 
 * 
 * 
 * 
 */


const mainroot = React.createElement('div', { id: 'mainroot' },


 React.createElement('div', { id: 'child' },
  [React.createElement('h1', {}, "I am H1"),
  React.createElement('h2', {}, "I am H2")]


 )
)



const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);



// const heading = React.createElement(
//  "h1", {}, "hello from React"
// )
// const para = React.createElement(
//  "h1", {}, "hello from Para"
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// (root.render(heading)).render(para);


************************************************************************************************************************************

```javascript
const mainroot = React.createElement('div', { id: 'mainroot' },


 React.createElement('div', { id: 'child' },
  [React.createElement('h1', {}, "I am H1"),
  React.createElement('h2', {}, "I am H2")]


 )
)
```

this is same as 
```html
<div id="mainroot">
 <div id="child">
  <h1>I am H1</h1>
  <h2>I am H2</h2>
 </div>
</div>
```


In order to make the 2 chlde elements we have to use the bracket...

When we do above code react will create an object of the above code. inorder to make it into an HTML element we have to  use the following code

```javascript
const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);
Now the above code will bocmes into an html element.

************************************************************************************************************************************




const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);

We can use this this create the main element in react.
***************************************************


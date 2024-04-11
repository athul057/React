************************************************************************************************************************************
# REACT

```javascript
const mainroot = React.createElement('div', { id: 'mainroot' },


 React.createElement('div', { id: 'child' },
  [React.createElement('h1', {}, "I am H1"),
  React.createElement('h2', {}, "I am H2")]


 )
)
```

The above code is same as 
```html
<div id="mainroot">
 <div id="child">
  <h1>I am H1</h1>
  <h2>I am H2</h2>
 </div>
</div>
```


In order to make the 2 child elements we have to use the bracket...

When we do above code react will create an object of the above code. inorder to make it into an HTML element we have to  use the following code

```javascript
const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);
```
Now the above code will bocmes into an html element.

************************************************************************************************************************************

**This is my HTML code**

```html
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Hello</title>
</head>

<body>
 <div id="root">

 </div>
 <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
 <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
 <script src="app.js"></script>
</body>

</html>
```

To sync it with react we have to first create the 'root' element by using the following command.


```javascript
const main = ReactDOM.createRoot(document.getElementById('root'));
main.render(mainroot);
```


**We can use this t create the 'root' element in react.**
[![Badge Text](badge-url)](link-url)

***************************************************






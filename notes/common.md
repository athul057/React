Usually in map we provide  `key ={unique_id}` a unique id .If we don't give  a unique id when ever a new entry happens to the map react will rerender all of the items in the map.
If we give a unique id to the map items react will prevent the rerender of all of the items in the map. It will give huge performance boost.


```javascript
rest.map((item) => {
   const { info } = item;
   return <div className='card' key={info.id}>

   .....
   </div>
} 
)
```

so when ever a new entry happens to the map item react will prevent the rerender of the whole items in the 'item' list.In the abvoe code it will only rerender essential items only.

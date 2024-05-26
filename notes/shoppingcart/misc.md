
```
.items-container {
  max-width: 100%; /* Adjust this value as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
```
<div className='items-container'>
  {info.cuisines.map((spanItem, index) => (
    <span className='items' key={index}>{spanItem}&</span>
  ))}
</div>
```

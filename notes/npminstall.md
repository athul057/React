
**`npm init`**

To initiate the npm 


**`npm install -D parcel`**

To install the parcel .Parcel will basically bundle whole of our code together(HTML,CSS,JS)


if we put this as `/node_modules` as in `.gitignore` file this will be ignored during git hub action time..


To again install nodemodules `npm install` it will download all the dependencies from the package.json and package-lock.json itself.







run our website using to execute our packets 
**`npx parcel index.html`**

This parcel will create a local server for us and host our app there 
automatically refreshing our page whenever a change occurs in the code.
**`HMR`**->Hot Module Replacement

`Parcel`

- It will automaticlly refreshes our website if any changes happens in our code.It has a File watching algorithm.

- Image optimization

- Caching-->Faster builds due to this.

- It will bundle whole of our files in to the project.

- Compress our file.

- Consisten Hashing.

- Code Splitting

- Diffrential Bundling --->through this our app will support older version of browser as well as different other browser also(chome, firefox, opera,mobil borwser etc.)

- Diagonostic towards errors

- Error handling

- We can make HTTPs.

- Tree shaking --->Remove unused code.

- Diffrent in dev and production build -->in production build we can remove some unused codes .


```
To create a production ready application 
**`npx parcel build index.html`**

It will compress and optimize our production ready application.
```











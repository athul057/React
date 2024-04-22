
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

1.It will automaticlly refreshes our website if any changes happens in our code.It has a File watching algorithm.
2.Image optimization
3.Caching-->Faster builds due to this.
4.It will bundle whole of our files in to the project.
5.Compress our file.
6.Consisten Hashing.
7.Code Splitting
8.Diffrential Bundling --->through this our app will support older version of browser as well as different other browser also(chome, firefox, opera,mobil borwser etc.)
9.Diagonostic towards errors
10.Error handling
11.We can make HTTPs.
12.Tree shaking --->Remove unused code.
13.Diffrent in dev and production build -->in production build we can remove some unused codes .

To create a production ready application 
**`npx parcel build index.html`**

It will compress and optimize our production ready application.











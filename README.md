# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Clone this project with:

`git clone https://github.com/szucsrobertz/neusoft.git`

After clone process done, you can run:


### `npm `


`npm install`\
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### Making requests to the backend API
***

We have a live API server running at https://api.exchangeratesapi.io for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.



### Folder Structure
***
```
.
src
├── .components
│   ├── CurrencyCard
│   │   ├── index.js
│   │   ├── styles.scss
│   ├── CurrencyModal
│   │   ├── index.js
│   │   ├── styles.scss
│   ├── HomePage
│   │   ├── index.jsx
│   │   ├── styles.scss
├── .redux
│   ├── .currency
│   │   ├── currency.actions.js
│   │   ├── currency.reducer.js
│   │   ├── currency.selectors.js
│   │   ├── currency.types.js
│   │   ├── fetchCurrencyRates.js
│   │   ├── fetchCurrencySymbols.js
│   ├── root-reducer.j
│   ├── store.j
├── .utils
│   ├── index.js
├──App.css
├──App.js
├──App.test.js
├──index.css
├──index.js
├──reportWebvitals.js
├──setupTests.js
├──.gitignore
├──package-lock.json
├──package.json
├──README.md!

```

### React-Redux Architecture
***
![react-redux](https://user-images.githubusercontent.com/56365068/134887637-c4dbd7b6-6f06-4af4-9b32-6d6191860035.png)

### Features
***
* Proven, scalable, and easy to understand project structure.
* Written in modern React, class components and functional components with hooks
* Redux state management, that behave consistently across client
* A variety of custom light-weight UI components such as modal, cards

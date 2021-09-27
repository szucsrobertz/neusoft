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

## Making requests to the backend API


We have a live API server running at https://api.exchangeratesapi.io for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.



## Folder Structure

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

## React-Redux Architecture

![react-redux](https://user-images.githubusercontent.com/56365068/134887637-c4dbd7b6-6f06-4af4-9b32-6d6191860035.png)

## Features

* Proven, scalable, and easy to understand project structure.
* Written in modern React, class components and functional components with hooks
* Redux state management, that behave consistently across client
* A variety of custom light-weight UI components such as modal, cards

## Componets

### Homepage

This is a class component that is the main page of the application. In this component, the lifecycle method componenDidMount() calls two redux-actions: 1.) for fetching the symbols api and storing them in the redux store 2.) for fetching the currencies rates with "EUR" base and saving them in the redux store. Another lifecyle method is called when we add new currencies to display
componentDidUpdate()  that saves the currencies rates that are rendered.
![homePage](https://user-images.githubusercontent.com/56365068/134900626-7b695414-d4e7-4d35-a06a-f403041a949e.png)

### CurrencyModal

This is a functional component that receives trough props the currencies symbols that were saved when the HomePage was rendered. All the currencies are listed with JavaScript built-in method *.map*.When the user is clicking a currency it's added to the app state with redux. This modal contains a button that modifies the currencies array which is rendered on the screen.

![modal](https://user-images.githubusercontent.com/56365068/134902085-c6408c1e-1815-4d71-9488-b26a0829dfae.png)

### CurrencyCard

This is a functional component that is being rendered on the home page with help of the *.map*. in the parent component. In this component the exchange values are calculated and displayed. 
![rates](https://user-images.githubusercontent.com/56365068/134903209-cc26b4d8-125c-4914-bb96-512cb66096e3.png)

## Missing features

With the free subscription plan on https://exchangeratesapi.io/ it's not possible to change the base that the currencies are reported to. That's why when the user is trying to enter values in other CurrencyCard than Euro , the app is alert the user's that this operation is not possible.
![error](https://user-images.githubusercontent.com/56365068/134904646-89df4ee2-f078-4ce2-8a22-b997984baab5.png)


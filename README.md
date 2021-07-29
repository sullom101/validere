# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Implementation

used the new Redux toolkit to implement store reducers and actions - the actions will run the logic added in calculation file to do the calculations needed - I have added a test cases for the cases needed - in app button click handler I have added a logic that dispatches the right dispatcher as needed based on the button clicks

for the calculation logic I have used a simple way to get a string of numbers with operations and then disect numbers from operations and conduct operations

for calculation results I have stored them in the store once every calculation was done and present it in it's component

I have also added WTI oilPrice using oilpriceapi and fetched the latest data once the button is clicked

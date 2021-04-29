## Pokéxplorer

This is a project to help me learn react-query. React-query is a really slick
library that helps with caching and managing state that's managed on a server, 
likely in APIs. So I'm using the pokeapi and caching everything you visit for 
an hour in the app, so whenever you visit a pokemon, several different APIs are 
used to display the information about the pokemon, the next time you look at it
or a related pokemon, much of its information may have already been retrieved
which means you'll see it load almost instantaneously.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

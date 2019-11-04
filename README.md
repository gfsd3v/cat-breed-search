
# Hostgator coding challenge

I did a fully responsive web app where the user can search for cat breads, [`click here`](https://www.gatsbyjs.org/) to see the app in production enviroment.

Most of the logic lies within the following files:

[src/components/Search](https://github.com/gfsd3v/hostgatos-redux/blob/master/src/components/Search/index.js) - Responsable for rendering the data provide from the catService class.
[src/services/catService.js](https://github.com/gfsd3v/hostgatos-redux/blob/master/src/services/catService.js)- Responsable for getting thecatapi data.

## Scripts

In the project root dir we have the following scripts:

### `yarn install / npm install`

First is mandatory to run this script before any other, this will install all the project dependencies.

### `yarn start / npm start`

Runs the developer server in [http://localhost:3000](http://localhost:3000).

### `yarn build / npm build`

Builds the app bundle in production enviroment, ready do be deployed.

## Improvement ideas

- **Tests:** Didn't had the time to add the tests needed, the project could use some
  basic Jest tests.

## Stack

- #### [`Styled Components`](https://www.styled-components.com/

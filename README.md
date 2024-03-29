
## Cat breed search

For this challenge I did a fully responsive web app where the user can search for cat breeds using thecatapi.com and pagination, [`click here`](https://hostgatos.netlify.com/) to see the app in production enviroment.

## Challenge layout requirement

![image](https://user-images.githubusercontent.com/36668882/68335567-76309080-00bb-11ea-81db-201e60400b8b.png)


## Core files

Most of the data logic lies within the following files:

- **[src/components/Search](https://github.com/gfsd3v/hostgatos-redux/blob/master/src/components/Search/index.js):** Responsable for rendering the data provide from the catService class.
- **[src/services/catService.js](https://github.com/gfsd3v/hostgatos-redux/blob/master/src/services/catService.js):** Responsable for getting thecatapi data.

## Extras tried to accomplish

- **Mobile-friendly/Responsive:** The app is fully responsive for any device.
- **Newest features of ECMAScript:** I used modern JS practices, using only functional components, hooks and the ES6 features that makes the code more concise and readable.
  
## Scripts

In the project root dir we have the following scripts:

### `yarn install / npm install`

First is mandatory to run this script before any other, this will install all the project dependencies.

### `yarn start / npm start`

Runs the developer server in [http://localhost:3000](http://localhost:3000).

### `yarn build / npm build`

Builds the app bundle in production enviroment, ready do be deployed.

## Improvement ideas
- **Security:** The [.env](https://github.com/gfsd3v/hostgatos-redux/blob/master/.env) file should be listed in the [.gitignore](https://github.com/gfsd3v/hostgatos-redux/blob/master/.gitignore), but I didn't do it because the .env is a mandatory file for running the app in dev mode, if it was a production app the api key would be in the [.env](https://github.com/gfsd3v/hostgatos-redux/blob/master/.env) file.

## Stack

- #### [`Styled Components`](https://www.styled-components.com/)

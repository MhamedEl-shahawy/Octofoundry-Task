# Octofoundry Frontend Task (ongoing)

Simple employees app to share employee details with one another.

## Aimed functionalities

- Users can sort employees, search and filter .
- a full fake data REST API is built with json-server.
- Users can update employees details.
- Users can delete employees details.
- Users can filter employees based on name , email and phone number.

## Framework and Library

- [ReactJS](https://reactjs.org/).
- [JSONServer](https://www.npmjs.com/package/json-server)

## Aimed Quality Standards

- Cross-Browser Compatibility (down to IE10).
- Code Modularity and Maintainability.

## Installation

- First clone app Ensure any install or build dependencies have installed
- All commands can running within `yarn or npm`

### Running App for local development

- In the project directory, you can run

### `npm run dev`

- In the project directory, to run Fake api data:

### `npx json-server --watch data/db.json  --port 8000`

### `change .env api root to http://localhost:8000/`

### Running App for build production or deploy app

### `yarn run build`

- In the project directory, to run Fake api data and live demo:

### `change .env api root to your host domin (www.domin.com/api/)  or to if you have not deployed yet  http://localhost:8000/`

### `npm run build`

### `npm run start`

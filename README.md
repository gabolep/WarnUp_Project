# WarnUp_Project

this project use mongoDB Atlas, so you don't need to create a docker image for mongo

## To run the project

in the web directory, run:

### `docker build -t warnup-front-image .`

this script will create the image of the react-app in docker, make sure to don't change the name of the image.

then, in the backend-nestjs directory, run:

### `docker build -t warnup-server-image .`

with the image of the front and the backend created, run the script:

### `docker-compose up`

this script run all the project at the same time.
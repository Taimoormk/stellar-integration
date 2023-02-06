import bodyParser from 'body-parser';
import { Application } from 'express';

export const middleware = (app : Application) : void => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

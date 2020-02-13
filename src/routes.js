import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.send({ messgae: 'Service Scheduling API' });
});

routes.post('/users', UserController.store);

export default routes;

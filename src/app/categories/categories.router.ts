import { Router } from 'express';
import { findAll, findOne, create, remove } from './categories.controller';

const categoriesRouter = Router();

categoriesRouter.get('/', (req, res) => findAll(req, res));
categoriesRouter.get('/:id', (req, res) => findOne(req, res));
categoriesRouter.post('/', (req, res) => create(req, res));
categoriesRouter.delete('/:id', (req, res) => remove(req, res));

export default categoriesRouter;
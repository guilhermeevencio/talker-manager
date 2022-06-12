const Router = require('express');
const listTalkerController = require('../UseCases/listTalkers/ListTalkersController');
const getTalkerByIdController = require('../UseCases/getTalkerById/GetTalkerByIdController');
const loginController = require('../UseCases/login/LoginController');
const createTalkerController = require('../UseCases/createTalker/CreateTalkerController');
const editTalkerController = require('../UseCases/editTalker/EditTalkerController');

const talkerManagerRoutes = Router();

talkerManagerRoutes.get('/talker', (req, res) => listTalkerController(req, res));
talkerManagerRoutes.post('/talker', (req, res, next) => createTalkerController(req, res, next));
talkerManagerRoutes.get('/talker/:id', (req, res) => getTalkerByIdController(req, res));
talkerManagerRoutes.put('/talker/:id', (req, res, next) => editTalkerController(req, res, next));
talkerManagerRoutes.post('/login', (req, res, next) => loginController(req, res, next));

module.exports = talkerManagerRoutes;

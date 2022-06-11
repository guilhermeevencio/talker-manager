const Router = require('express');
const listTalkerController = require('../UseCases/listTalkers/ListTalkersController');
const getTalkerByIdController = require('../UseCases/getTalkerById/GetTalkerByIdController');
const loginController = require('../UseCases/login/LoginController');

const talkerManagerRoutes = Router();

talkerManagerRoutes.get('/talker', (req, res) => listTalkerController(req, res));
talkerManagerRoutes.get('/talker/:id', (req, res) => getTalkerByIdController(req, res));
talkerManagerRoutes.post('/login', (req, res, next) => loginController(req, res, next));

module.exports = talkerManagerRoutes;

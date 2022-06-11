const Router = require('express');
const listTalkerController = require('../UseCases/listTalkers/ListTalkersController');
const getTalkerByIdController = require('../UseCases/getTalkerById/GetTalkerByIdController')

const talkerManagerRoutes = Router();

talkerManagerRoutes.get('/talker', (req, res) => listTalkerController(req, res));
talkerManagerRoutes.get('/talker/:id', (req, res) => getTalkerByIdController(req, res));

module.exports = talkerManagerRoutes
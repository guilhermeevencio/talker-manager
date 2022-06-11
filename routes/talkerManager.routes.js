const Router = require('express');
const ListTalkerController = require('../UseCases/listTalkers/ListTalkersController');

const talkerManagerRoutes = Router();

talkerManagerRoutes.get('/talker', (req, res) => ListTalkerController(req, res));

module.exports = talkerManagerRoutes
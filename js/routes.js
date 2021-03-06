/*! *******************************************************
 *
 * evolutility-server :: utils/routes.js
 *
 * https://github.com/evoluteur/evolutility-server
 * Copyright (c) 2016 Olivier Giulieri
 ********************************************************* */

var express = require('express');
var router = express.Router();
//var {router} = require('express').Router();
var logger = require('./utils/logger');
var orm = require('./utils/orm');

var config = require('../config');
var apiPath = config.apiPath;


logger.ascii_art();

/*
// ======  file server ====================================
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'index.html'));
}); */

// ======  GET MANY ====================================
router.get(apiPath+':entity', orm.getMany);
router.get(apiPath+'chart/:entity/:field', orm.chartMany);

// ======  GET ONE   ====================================index-
router.get(apiPath+':entity/:id', orm.getOne);

// ======  INSERT ONE ====================================
router.post(apiPath+':entity', orm.insertOne);

// ======  UPDATE ONE  ====================================
router.patch(apiPath+':entity/:id', orm.updateOne);
router.put(apiPath+':entity/:id', orm.updateOne);

// ======  DELETE ONE ====================================
router.delete(apiPath+':entity/:id', orm.deleteOne);

module.exports = router;

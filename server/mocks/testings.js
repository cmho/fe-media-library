module.exports = function(app) {
  var express = require('express');
  var testingsRouter = express.Router();

  testingsRouter.get('/', function(req, res) {
    res.send({
      'testings': []
    });
  });

  testingsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  testingsRouter.get('/:id', function(req, res) {
    res.send({
      'testings': {
        id: req.params.id
      }
    });
  });

  testingsRouter.put('/:id', function(req, res) {
    res.send({
      'testings': {
        id: req.params.id
      }
    });
  });

  testingsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/testings', testingsRouter);
};

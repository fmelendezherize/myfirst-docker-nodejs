var express = require('express');
var app = express();

// import model
var Project = require('../models/projects');

//api function export
module.exports = function(app) {

  //get all projects
  app.get('/api', function(req, res, next) {
    var projects = Project.find().exec(function(err, data) {
      if (err) {
        return next(err);
      }
      console.log(data);
      res.json(data);

    });
  });

  //get 1 project
  app.get('/api/:id', function(req, res, next) {
    var project = Project.findById(req.params.id, function(err, data) {
      if (err) {
        return next(err);
      }
      console.log(data);
      res.json(data);

    });
  });

  //Post new project
  app.post('/api', function(req, res, next) {
    var project = new Project({
      title: req.body.title,
      tasks: req.body.tasks
    });
    project.save(function(err, data) {
      if (err) {
        return next(err);
      }
      res.redirect('/');

    });

  });


  //Delete project
  app.delete('/api/:id', function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err, data) {
      res.redirect('/');
    });

  });

  //Update a project
  app.put('/api/:id', function(req, res, next) {
    console.log("edit id");
    Project.findById(req.params.id, function(err, data) {
      data.title = req.body.title;
      data.tasks = req.body.tasks;
      data.save(function(err, data) {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });

  //add tasks
  app.put('/api/:id/tasks', function(req, res, next) {
    console.log("add task id");
    Project.findById(req.params.id, function(err, data) {
      var new_task = {
        item: req.body.item
      };
      data.tasks.push(new_task);
      data.save(function(err, data) {
        if (err) {
          return next(err);
        }
        res.json(data);
      });
    });
  });

};

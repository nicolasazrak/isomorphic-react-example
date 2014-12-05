var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install();
var React = require('react');
var App = require('../public/javascripts/components/App.js');
var Task = require('../models/Task');


/* GET home page. */
router.get('/api/task', function(req, res) {
	Task.find({}, function (err, data) {
  		res.render('blank', { layout: 'json', data: data });
	});
});

router.post('/api/task', function (req, res) {
	var newTask = new Task(req.body);
	newTask.save(function (err) {
		res.render('blank', { layout: 'json', data: { result: "OK", data: newTask } });
	});
});



router.post('/task', function (req, res) {
	var newTask = new Task(req.body);
	newTask.save(function (err) {
		res.redirect('/');
	});
});

module.exports = router;

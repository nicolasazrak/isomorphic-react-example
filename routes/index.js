var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install();
var React = require('react');
var App = React.createFactory(require('../public/javascripts/components/App.js'));
var request = require('request');


/* GET home page. */
router.get('/', function(req, res) {
	
	//res.render('index', { markup: "" } );
	//return;

	request('http://localhost:8000/api/task', function (erorr, ajaxResponse, body) {
		var data = JSON.parse(body);
    	res.render( 'index', { 
    		markup: React.renderToString(App({data: data})),
    		tasks: body
    	});
	});
	
});

module.exports = router;

'use strict';

var _ = require('lodash');

var dataModel = require('../../models/dataModel')('2014');

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('index', dataModel.getAll());
    });

	router.get('/about', function (req, res) {
		res.render('about', dataModel.getAll());
	});

	router.get('/about.html', function (req, res) {
		res.redirect(301, '/2015/about');
	});
};

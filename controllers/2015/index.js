'use strict';

var _ = require('lodash');

var dataModel = require('../../models/dataModel')('2015');

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('index', dataModel.getAll());
    });

	router.get('/about', function (req, res) {
		res.render('about', dataModel.getAll());
	});

	router.get('/ambassador-program', function (req, res) {
		res.render('ambassador', dataModel.getAll());
	});

	router.get('/call_for_presentations', function (req, res) {
		res.render('call_for_presentations', dataModel.getAll());
	});

};

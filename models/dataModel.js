'use strict';

var fs = require('fs');
var path = require('path');

var scheduleModel = require('./scheduleModel');

module.exports = function (year) {
	var dataPath = path.resolve('./data/');
	var dataPathYear = path.join(dataPath, year);
	var data = {};

	//require all year specific data
	fs.readdirSync(dataPathYear).forEach(function(file) {
		file = file.replace('.js', '');

		data[file] = require(path.join(dataPathYear, file));
	});

	//require global modules if there is no year specific data
	fs.readdirSync(dataPath).forEach(function (file) {
		var filePath = path.join(dataPath, file);

		if (fs.statSync(filePath).isFile()) {
			file = file.replace('.js', '');

			if (!data[file]) {
				data[file] = require(filePath);
			}
		}
	});

	if (data.schedule) {
		data.schedule = scheduleModel.decorateSchedule(data.schedule, data.speakers);
	}

	if (data.conf.year) {
		data.conf.year = year;
	}

	return {
		/**
		 * get data based on the current year, global data is the fallback
		 * @param key
		 * @returns {Object|*}
		 */
		get: function (key) {
			return data[key];
		},

		/**
		 * get all data for the current year
		 * @returns {{}}
		 */
		getAll: function () {
			return data;
		}
	};
};
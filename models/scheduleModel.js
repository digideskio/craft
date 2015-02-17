'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var moment = require('moment');

function findSpeakerById (speakers, id) {
	var speakerData = id;

	_.each(speakers, function (speaker) {
		if (speaker.anchor === id) {
			speakerData = speaker;
		}
	});

	return speakerData;
}

module.exports = {
	decorateSchedule: function (schedule, speakers) {
		_.each(schedule, function (day) {
			var date = moment();
			var start = day.start.split(':');

			date.set('hour', start[0]);
			date.set('minute', start[1]);

			_.each(day.table, function (item) {
				var currentTime = item.time;

				item.time = date.format('HH:mm');

				date.add(currentTime, 'm');

				item.time += ' - ' + date.format('HH:mm');

				if (item.slots) {
					_.each(item.slots, function (speaker, speakerIndex) {
						item.slots[speakerIndex] = findSpeakerById(speakers, speaker);
					});
				}
			});

		});

		return schedule;
	}
};

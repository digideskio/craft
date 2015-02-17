var enabled = [
	'about_page',
	// 'cfp_link',
	//'live',
	'about',
	'location',
	'speakers',
	'workshops',
	//'schedule',
	'tickets',
	'sponsors',
	'superstars',
	'organizers',
	//'meetups',
	'contact',
	'coc',
	'ambassador_program'
];

var sections = [
	{
		id: 'about_page',
		label: 'About',
		page_url: 'about'
	},
	{
		id: 'cfp_link',
		label: 'CFP',
		full_url: 'https://docs.google.com/a/ustream.tv/forms/d/1gCrZb-m-7r_GeHWKMKH5AtwLEwbQnt-2iEN4wXdf8Fw/viewform'
	},
	{
		id: 'about',
		year: '2015'
	},
	{
		id: 'live',
		label: 'Live'
	},
	{
		id: 'location',
		label: 'Location',
		year: 2015
	},
	{
		id: 'speakers',
		label: 'Speakers'
	},
	{
		id: 'workshops',
		label: 'Workshops'
	},
	{
		id: 'schedule',
		label: 'Schedule'
	},
	{
		id: 'tickets',
		label: 'Tickets'
	},
	{
		id: 'sponsors',
		label: 'Sponsors'
	},
	{
		id: 'superstars',
		label: 'Superstars',
		hide_in_menu: true
	},
	{
		id: 'organizers',
		label: 'Organizers'
	},
	{
		id: 'meetups',
		label: 'Meetups'
	},
	{
		id: 'contact',
		label: 'Contact'
	},
	{
		id: 'coc',
		label: 'CoC'
	},
	{
		id: 'ambassador_program',
		label: 'Ambassador program',
		page_url: 'ambassador-program'
	}
];

module.exports = sections.filter(function (e) { return enabled.indexOf(e.id) !== -1; });

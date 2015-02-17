var sections = [
	{
		id: 'about_page',
		label: 'About',
		page_url: 'about'
	},
	{
		id: 'live',
		label: 'Live'
	},
	{
		id: 'about',
		year: '2014'
	},
	{
		id: 'location',
		label: 'Location'
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
		id: 'next',
		label: 'Next',
		page_url: '../2015'
	}
];

var enabled = [
	'about_page',
	'live',
	'about',
	'location',
	'speakers',
	'workshops',
	'schedule',
	//'tickets',
	'sponsors',
	'organizers',
	'meetups',
	'contact',
	'coc',
	'next'
];

module.exports = sections.filter(function (e) { return enabled.indexOf(e.id) !== -1; });

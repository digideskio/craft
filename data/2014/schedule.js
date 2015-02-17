var config = {
	types: {
		breakfast: 50,
		keynote: 50,
		sponsorPitch: 40,
		break: 30,
		session: 40,
		lunch: 85,
		leanpoker: 10,
		welcome: 10,
		dinner: 345
	},
	stages: [
		'Main room',
		'Room 1.',
		'Room 2.'
	],
	titles: {
		break:        "Break",
		break_raffle: "Break and Raffle",
		lunch:        "Lunch",
		dinner:       "Dinner & EPAM Party, <br/> <b>Performer:</b> <b>" +
		"<a target=\"_blank\" href=\"http://www.littlegweevil.net/\">Little G Weevil</a></b>," +
		"<br/> <b>Concert:</b> 20:30 - 22:00, <b>DJ:</b> until 24:00",
		welcome:      "Welcome",
		breakfast:    "Breakfast",
		leanpoker:    "Lean Poker - A fun way to learn continuous deployment",
		sponsorpitch: "Sponsor pitch",
		registration: "Registration & Breakfast"
	}
};

module.exports = [
	{
		header: "Day 2",
		start: '08:00',
		name: 'Thursday',
		table: [
			{ time: config.types.breakfast,     title: config.titles.registration },
			{ time: config.types.welcome,       title: config.titles.welcome },
			{ time: config.types.sponsorPitch,  title: config.titles.sponsorpitch },
			{ time: config.types.keynote,       slots: ['BodilStokke'], keynote: true },
			{ time: config.types.break,         title: config.titles.break },
			{ time: config.types.session,       slots: ['GojkoAdzic',  'BenMathews',            'RachelLaycock'] },
			{ time: config.types.session,       slots: ['JonasBoner',  'SzabolcsSzabolcsiToth', 'AnnaObukhova'] },
			{ time: config.types.lunch,         title: config.titles.lunch },
			{ time: config.types.session,       slots: ['MateNadasdi', 'MitchellHashimoto',     'AndrewGodwin'] },
			{ time: config.types.session,       slots: ['EricEvans',   'AlvaroVidela',          'DanielPosch'] },
			{ time: config.types.session,       slots: ['AlissaPajer', 'RachelDavies',          'SimonBrown'] },
			{ time: config.types.break,         title: config.titles.break },
			{ time: config.types.session,       slots: ['DanNorth',    'TheoSchlossnagle2',      'TimFelgentreff'] },
			{ time: config.types.session,       slots: ['BruceEckel',  'JohnHughes',             'AndyPiper'] },
			{ time: config.types.session,       slots: ['AmberCase',   'DouglasCrockford',        'MichaelFeathers'] },
			{ time: config.types.dinner,        title: config.titles.dinner }
		]
	},
	{
		header: "Day 3",
		start: '08:00',
		name: 'Friday',
		table: [
			{ time: config.types.breakfast,   title: config.titles.breakfast },
			{ time: config.types.leanpoker,   title: config.titles.leanpoker },
			{ time: config.types.keynote,     slots: ['ChadFowler'], keynote: true },
			{ time: config.types.session,     slots: ['TheoSchlossnagle',   'MarkusVolter',       'TorbenHoffmann'] },
			{ time: config.types.break,       title: config.titles.break},
			{ time: config.types.session,     slots: ['GerardMeszaros',     'TomomiImura',        'StasZvinyatskovsky'] },
			{ time: config.types.session,     slots: ['JuttaEckstein',      'IanRobinson',        'NatPryceSteveFreeman'] },
			{ time: config.types.lunch,       title: config.titles.lunch },
			{ time: config.types.session,     slots: ['JevgeniKabanov',     'ChrisAtherton',      'SimonHildrew'] },
			{ time: config.types.session,     slots: ['StefanTilkov',       'DominicTarr',        'StefanEdlich'] },
			{ time: config.types.session,     slots: ['GarethRushgrove',    'FerossAboukhadijeh', 'EndreVarga'] },
			{ time: config.types.break,       title: config.titles.break_raffle},
			{ time: config.types.session,     slots: ['EvanCzaplicki',      'WimGodden',          'DiegoOngaro'] },
			{ time: config.types.session,     slots: ['BjornFreemanBenson', 'JeffHodges',         'GregYoung'] }
		]
	}
];
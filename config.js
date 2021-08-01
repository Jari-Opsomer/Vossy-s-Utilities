module.exports = {
	/* For the support server */
	support: {
		id: "771839077271207957", // The ID of the support server
		logs: "771846463734153267", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "vr-pclLV3OcqeTiFp6nqRZkvtiUYQOom", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "771846463734153267", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	// - mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "v!", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#ee8000", // The default color for the embeds
		footer: "Vossy's Utilities | VossyGamer#1234" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "303929097317253121", // The ID of the bot's owner
		name: "VossyGamer#1234" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		enabled: false, // wether votes is enabled or not
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs

	},

	/* The Bot status */
	status: [
		{
			name: "Vossy's Utilities help on {serversCount} servers",
			type: "WATCHING"
		},
		{
			name: "VossyGamer eating Appelmoes",
			type: "WATCHING"
		},
		{
			name: "with all the chickens outside",
			type: "PLAYING"
		},
		{
			name: "Minecraft: Chicken Mod",
			type: "PLAYING"
		}
	]
};

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get info on how the bot works!'),
	async execute(interaction) {
		await interaction.reply('Hi! Thanks for using Pronoun Bot! To get started, simply type `/try` and fill out the required fields! A description is provided with each field in case you don\'t know what some of the words mean! For more info on pronouns, I suggest you check out https://en.pronouns.page!');
	},
};
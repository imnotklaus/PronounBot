const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('try')
		.setDescription('Try out pronouns!')

        .addStringOption((o) => 
          o.setRequired(true)
          .setName('name')
          .setDescription('Name youd like to try'))

          .addStringOption((o) => 
             o.setRequired(true)
             .setName('object')
             .setDescription('e.g. "they"'))

             .addStringOption((o) => 
                o.setRequired(true)
                .setName('subject')
                .setDescription('e.g. "them"'))

                .addStringOption((o) => 
                  o.setRequired(true)
                  .setName('possessive-determiner')
                  .setDescription('e.g. "their"'))

                  .addStringOption((o) => 
                     o.setRequired(true)
                     .setName('possessive-pronoun')
                     .setDescription('e.g. "theirs"'))

                     .addStringOption((o) => 
                        o.setRequired(true)
                        .setName('reflexive')
                        .setDescription('e.g. "themself"')),
                        
          async execute (interaction) {
            let string = interaction.options.getString('name')
            string = string.toLowerCase()
            const newString = string.split('')
            newString[0] = newString[0].toLocaleUpperCase()
            string = newString.join('')

            const name = interaction.options.getString('name')
            const object = interaction.options.getString('object')
            const subject = interaction.options.getString('subject')
            const pd = interaction.options.getString('possessive-determiner')
            const pp = interaction.options.getString('possessive-pronoun')
            const ref = interaction.options.getString('reflexive')

            await interaction.reply(`Have you met **${name}**? 
            • I think **${object}** is/are very nice
            • I asked **${subject}** if I could borrow **${pd}** pencil
            • **${object}** told me that the house is **${pp}**
            • **${object}** said **${object}** would rather do it **${ref}**`);
            }
            
	};

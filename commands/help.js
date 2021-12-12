module.exports = {
    name: "help",
    run: (client, message, args) => {
        message.channel.send("To try on some pronouns, type: ```pronouns try [name] [object] [subject] [possessive determiner] [possessive pronoun] [reflexive]``` If you dont know what this means, an example would be: ```pronouns try Bob He Him His His Himelf```");
}}
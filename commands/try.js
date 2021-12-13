module.exports = {
name: "try",
run: (client, message, args) => {
let [name, subject, object, pd, pp, reflexive] = args;

const noargs = args[0];
if(!noargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)');
return;}

const oneargs = args[1];
if(!oneargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)');
return;}

const twoargs = args[2];
if(!twoargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)');
return;}

const threeargs = args[3];
if(!threeargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)');
return;}

const fourargs = args[4]
if(!fourargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)')
return;}

const fiveargs = args[5]
if(!fiveargs) {
message.reply('You must specify all arguments! (e.g. `Bob they them their theirs themselves`)')
return;}

        message.reply(`Have you met **${name}**? 
        • I think **${subject}** is/are very nice
        • I asked **${object}** if I could borrow **${pd}** pencil
        • **${subject}** told me that the house is **${pp}**
        • **${subject}** said **${subject}** would rather do it **${reflexive}**`);
}};
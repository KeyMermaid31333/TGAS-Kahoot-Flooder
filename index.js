//require modules
const KahootSpam = require('kahoot-spammer')
readline = require('readline-sync');

//define spam client
let client = KahootSpam

//skiddy ascii
console.log("\n██ ▄█▀▄▄▄       ██░ ██  ▒█████   ▒█████  ▄▄▄█████▓ ██ ▄█▀ ██▓ ██▓     ██▓    ▓█████  ██▀███  \n ██▄█▒▒████▄    ▓██░ ██▒▒██▒  ██▒▒██▒  ██▒▓  ██▒ ▓▒ ██▄█▒ ▓██▒▓██▒    ▓██▒    ▓█   ▀ ▓██ ▒ ██▒\n▓███▄░▒██  ▀█▄  ▒██▀▀██░▒██░  ██▒▒██░  ██▒▒ ▓██░ ▒░▓███▄░ ▒██▒▒██░    ▒██░    ▒███   ▓██ ░▄█ ▒\n▓██ █▄░██▄▄▄▄██ ░▓█ ░██ ▒██   ██░▒██   ██░░ ▓██▓ ░ ▓██ █▄ ░██░▒██░    ▒██░    ▒▓█  ▄ ▒██▀▀█▄  \n▒██▒ █▄▓█   ▓██▒░▓█▒░██▓░ ████▓▒░░ ████▓▒░  ▒██▒ ░ ▒██▒ █▄░██░░██████▒░██████▒░▒████▒░██▓ ▒██▒\n▒ ▒▒ ▓▒▒▒   ▓▒█░ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░   ▒ ░░   ▒ ▒▒ ▓▒░▓  ░ ▒░▓  ░░ ▒░▓  ░░░ ▒░ ░░ ▒▓ ░▒▓░\n░ ░▒ ▒░ ▒   ▒▒ ░ ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░     ░    ░ ░▒ ▒░ ▒ ░░ ░ ▒  ░░ ░ ▒  ░ ░ ░  ░  ░▒ ░ ▒░\n░ ░░ ░  ░   ▒    ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒    ░      ░ ░░ ░  ▒ ░  ░ ░     ░ ░      ░     ░░   ░ \n░  ░        ░  ░ ░  ░  ░    ░ ░      ░ ░           ░  ░    ░      ░  ░    ░  ░   ░  ░   ░\n")

//pin
const PIN = readline.question('𝙀𝙣𝙩𝙚𝙧 𝙋𝙄𝙉: ');

//username
console.log('𝙒𝙖𝙧𝙣𝙞𝙣𝙜: 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚𝙨 𝙘𝙖𝙣𝙣𝙤𝙩 𝙘𝙤𝙣𝙩𝙖𝙞𝙣 𝙞𝙣𝙣𝙖𝙥𝙧𝙤𝙥𝙧𝙞𝙖𝙩𝙚 𝙩𝙚𝙭𝙩 𝙤𝙧 𝙞𝙩 𝙬𝙞𝙡𝙡 𝙣𝙤𝙩 𝙬𝙤𝙧𝙠');
const Username = readline.question('𝙀𝙣𝙩𝙚𝙧 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚: ');

//amount
console.log('𝙒𝙖𝙧𝙣𝙞𝙣𝙜: 𝘽𝙤𝙩 𝙖𝙢𝙤𝙪𝙣𝙩𝙨 𝙩𝙤𝙤 𝙝𝙞𝙜𝙝 𝙬𝙞𝙡𝙡 𝙣𝙤𝙩 𝙬𝙤𝙧𝙠');
const Amount = readline.question('𝙀𝙣𝙩𝙚𝙧 𝘼𝙢𝙤𝙪𝙣𝙩: ');

//ruin correct percentage
const Answer = readline.question('𝘽𝙤𝙩𝙨 𝙘𝙝𝙤𝙤𝙨𝙚 𝙧𝙖𝙣𝙙𝙤𝙢 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣𝙨? (𝙮/𝙣) ');

//send bots
if (Answer == "y") {
console.log('𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙗𝙤𝙩𝙨... 𝙡𝙚𝙖𝙫𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬 𝙤𝙥𝙚𝙣');
client.spamWithAnswers(PIN, Username, Amount, true);
} else if (Answer == "n") {
console.log('𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙗𝙤𝙩𝙨... 𝙡𝙚𝙖𝙫𝙚 𝙩𝙝𝙞𝙨 𝙬𝙞𝙣𝙙𝙤𝙬 𝙤𝙥𝙚𝙣');
client.spam(PIN, Username, Amount);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan No hp: ', (nohp) => {
        console.log(`Terima kasih ${nama} dengan No hp ${nohp}`);
        rl.close();
    });
});

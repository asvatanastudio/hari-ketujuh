const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const datapath = './data';
if (!fs.existsSync(datapath)) {
    fs.mkdirSync(datapath);
}

// Cek apakah file contacts.json ada, jika tidak buat file kosong dengan array
const contactsFile = `${datapath}/contacts.json`;
if (!fs.existsSync(contactsFile)) {
    fs.writeFileSync(contactsFile, '[]', 'utf-8');
}

rl.question('Masukkan nama anda: ', (nama) => {
    rl.question('Masukkan No hp: ', (nohp) => {
        // Buat objek contact
        const contact = { nama: nama, nohp: nohp };
        
        // Baca file contacts.json dan parsing isinya
        const file = fs.readFileSync(contactsFile, 'utf-8');
        const contacts = JSON.parse(file);

        // Tambah data contact baru
        contacts.push(contact);

        // Simpan kembali ke file
        fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

        console.log(`Terima kasih ${nama} dengan No hp ${nohp}`);
        rl.close();
    });
});

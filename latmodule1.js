function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}
const PI = 3.14;
let mahasiswa = {
    nama: 'budi',
    alamat: "jakarta",
    cetakMhs () {
        return `Halo, nama saya ${this.nama}, alamat saya di ${this.alamat}`;
    }
};
module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;
const fs = require('fs');

// Gunakan try-catch untuk operasi sinkron
try {
    fs.writeFileSync('data/test.txt', 'Hello shync');
} catch (e) {
    console.log("Error writeFileSync:", e);
}

// Gunakan callback untuk operasi async
fs.writeFile('data/test.txt', 'Hello Asynchronous', (err) => {
    if (err) {
        console.log("Error writeFile:", err);
        return;
    }

    // Baca isi file setelah selesai menulis (asynchronous)
    fs.readFile('data/test.txt', (err, data) => {
        if (err) {
            console.log("Error readFile:", err);
        } else {
            console.log("Isi file:", data.toString());
        }
    });
});




const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Value of pdf:', pdf);

try {
    const dataBuffer = fs.readFileSync('src/temp.pdf');
    if (typeof pdf === 'function') {
        pdf(dataBuffer).then(function (data) {
            console.log(data.text);
        }).catch(function (error) {
            console.error("PDF Parsing Error:", error);
        });
    } else if (pdf.default && typeof pdf.default === 'function') {
        console.log("Using pdf.default");
        pdf.default(dataBuffer).then(function (data) {
            console.log(data.text);
        });
    } else {
        console.error("Unknown export structure");
    }
} catch (e) {
    console.error("File Read Error:", e);
}

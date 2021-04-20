const fs = require('fs');

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                console.log(err)
                return;
            }
            resolve
        });
    })
}

module.exports = copyFile;
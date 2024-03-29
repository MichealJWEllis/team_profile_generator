const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                console.log(err)
                return;
            }
            resolve
            console.log('HTML File Generated!')
        })
    })
}

module.exports = writeFile;
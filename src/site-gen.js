const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, Error => {
            if (Error) {
                reject(Error);
                console.log(Error)
                return;
            }

            resolve({
                ok: true,
                message:'Page Generated!'
            })
        })
    })
}

module.exports = writeFile
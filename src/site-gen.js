const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                console.log(err)
                return;
            }
            resolve({
                ok: true,
                message:'Page Generated!'
            })
        })
    })
}


const copyFile = () => {
  return new Promise ((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        console.log(err)
        return;
      }
      resolve({
        ok: true,
        message: 'CSS file copied!'
      })
    });
  })
}


module.exports = { writeFile, copyFile };
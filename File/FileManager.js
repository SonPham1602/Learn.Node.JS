const fs = require('fs');
module.exports = {
    CreateFolder: (path, name) => {
        if (!fs.existsSync(path+name)){
            fs.mkdirSync(path+name);
            console.log('Creating Folder Susseccful');
        }
    },
    DeleteFile:(path,name) => {

    }
}
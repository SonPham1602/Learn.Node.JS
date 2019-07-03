const fs = require('fs');
module.exports = {
    CreateFolder: (path) => {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
            console.log('Creating Folder Susseccful');
        }
    },
    CreateFileText: (path, name, content) => {
        fs.writeFile(path + '/' + name, content, (err) => {
            if (err) throw err
            console.log('Save file');
        });
    },
    DeleteFile: (path, name) => {
        fs.unlink(path +'/'+ name, (err) => {
            if (err) 
                console.log(err);

            console.log('File deleted');
        })
    },
    RenameFile: (path, oldName, newName) => {
        fs.rename(path + '/' + oldName, path + '/' + newName, (err) => {
            if (err) throw err;
            console.log('File Renamed');
        })
    },
    ChangeContentFileText: (path, name, newContent) => {
        if(!fs.existsSync(path + '/' + name)){
            fs.writeFile(path + '/' + name,newContent, )
        }
        else{
            console.log('File does not exist');
        }
    }

}
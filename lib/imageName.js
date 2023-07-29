import fs from 'fs';
import path from 'path';

const imageDirectory = path.join(process.cwd(),'public/gallery');

export function getImageName() {
    const fileNames = fs.readdirSync(imageDirectory);
    return fileNames;
}

export function getImageNameIds() {
    const fileNames = fs.readdirSync(imageDirectory);
    const ret =  fileNames.map(x=> {
       return {
            params: {
                mesh: x,
            }
       }
    });
    return ret;
}

export function getImages(mesh) {
    const dirName = path.join(imageDirectory,mesh);
    const fileName = fs.readdirSync(dirName);
    return [path.join("/gallery",mesh,fileName[1]), path.join("/gallery",mesh,fileName[0])];
}
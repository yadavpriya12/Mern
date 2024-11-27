import fs, { ReadStream } from "fs"

const readstream = fs.createReadStream("Abc.txt");
const writestream = fs.createWriteStream("Xyz.txt");

readstream.pipe(writestream);
console.log("sucess.....")
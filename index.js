const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');

const filePath = `${dirPath}/crud.txt`;

// fs.writeFileSync(filePath, "This is a Simple Text File");

// fs.readFile(filePath,'utf8', (err, item)=>{
//     console.log(item);
// })


// fs.appendFile(filePath, ' and file name is crud.txt', (err) => {
//     if(!err) console.log("File is updated");
// });

// fs.rename(filePath, `${dirPath}/crudTest.txt`, (err)=>{
//     if(!err) console.log("File is Renamed");
// })

fs.unlinkSync(`${dirPath}/crudTest.txt`);


// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+"/demo"+i+".txt", "Demo Text for demo"+i+".txt File");
// }

// fs.writeFileSync('apple.txt', 'This is a Apple File');

// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((item)=>{
//         console.log("File name is "+item);
//     })
// });





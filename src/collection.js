const path = require('path');
const fs = require('fs');

function getImages(folder) {
    let collectionsDir = "./images/collections";
    let imagesDir = path.join(collectionsDir, folder);

    var results = [];
    fs.readdirSync(imagesDir).forEach(function(file) {
        file = path.join(imagesDir, file);
        results.push(file);
    });

    return results;
}

//console.log(getImages("bridal_wear"))

// function getImages(folder) {
//     let collectionsDir = "./images/collections";
//     let imagesDir = path.join(collectionsDir, folder);

//     console.log("images dir", imagesDir)
    
//     let images = fs.readdir(imagesDir, (err, files) => {
//         if (err) {
//             console.error("error", err)
//         }

//         images = []
//         files.forEach(file => {
//             imageFile = path.join(imagesDir, file)
//             console.log("images file", imageFile)
//             images.push(imageFile)
//         });

//         console.log("output", images)
//         return images
//     });

//     console.log("output2", images)
//     return images
// }

// console.log("final", getImages("bridal_wear"))

// function readFiles(dirname, onFileContent, onError) {
//     let dirname = path.join(colletions, "bridal_wear");

//     fs.readdir(dirname, function(err, filenames) {
//         if (err) {
//             onError(err);
//         return;
//         }
//         filenames.forEach(function(filename) {
//             fs.readFile(dirname + filename, 'utf-8', function(err, content) {
//                 if (err) {
//                     onError(err);
//                     return;
//                 }
//                 onFileContent(filename, content);
//             });
//         });
//     });
// }


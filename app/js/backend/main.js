const fs = require('fs');

fs.readdir('../../audio', (err, files) => {
  // if(err) throw err;
  console.log('В папке находятся файлы:' + files);
  
  fs.appendFile('songs.js', JSON.stringify(files), (err) => {
    if (err) console.log('error');
  });
})

// fs.writeFile('songs.js', JSON.stringify(songs), (err) => {
//   if (err) console.log('error');
// });
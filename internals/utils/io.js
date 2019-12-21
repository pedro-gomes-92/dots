const fs = require('fs');

const readPaths = startPath => {
  const result = [];
  const recursiveReaddir = currentPath =>
    fs.readdirSync(currentPath).forEach(name => {
      const filePath = `${currentPath}/${name}`;
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        result.push(filePath.replace(startPath, ''));
        return;
      }

      if (stat.isDirectory()) {
        recursiveReaddir(filePath);
      }
    });
  recursiveReaddir(startPath);
  return result;
};

module.exports = {
  readPaths,
};

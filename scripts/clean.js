/**
 * Clean dist folder
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function deleteFolderRecursive(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach(file => {
            const curPath = path.join(dirPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirPath);
    }
}

if (fs.existsSync(DIST_DIR)) {
    deleteFolderRecursive(DIST_DIR);
    console.log('   ✓ Cleaned dist folder');
} else {
    console.log('   ✓ dist folder already clean');
}

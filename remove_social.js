const fs = require('fs');
const path = 'c:/Users/saaid/Music/asdfgh/invoice-generator-main/app/(landing)/page.tsx';
let lines = fs.readFileSync(path, 'utf8').split('\n');

if (lines[133].includes('flex justify-center items-center border-b border-dashed mb-20')) {
    lines.splice(133, 34);
    fs.writeFileSync(path, lines.join('\n'));
    console.log('Successfully removed lines');
} else {
    console.log('Line 134 mismatch, found: ', lines[133]);
}

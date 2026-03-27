const fs = require('fs');
const path = 'c:/Users/saaid/Music/asdfgh/invoice-generator-main/app/(landing)/page.tsx';
const content = fs.readFileSync(path, 'utf8');

const replaced = content.replace(/[ \t]*<a\s+href="https:\/\/www\.producthunt\.com\/posts\/invoice-generator-9bce3e1b-dab2-4a7a-ba7e-e315be868119"[\s\S]*?<\/a>\n/, '');

fs.writeFileSync(path, replaced);
console.log('Done replacing');

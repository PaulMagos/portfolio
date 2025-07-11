// scripts/generate-thumbnails.js
const fs = require('fs');
const path = require('path');
const pdfThumbnail = require('pdf-thumbnail');

const papersDir = path.join('/papers');
const previewDir = path.join('/previews');

if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir);

fs.readdirSync(papersDir).forEach(async (file) => {
  if (path.extname(file) === '.pdf') {
    const citation = path.basename(file, '.pdf');
    const pdfPath = path.join(papersDir, file);
    const outputPath = path.join(previewDir, `${citation}.png`);

    if (fs.existsSync(outputPath)) return; // Skip if already exists

    const input = fs.createReadStream(pdfPath);
    const thumb = await pdfThumbnail(input, { resize: { width: 300 } });

    fs.writeFileSync(outputPath, thumb);
    console.log(`✔ Created thumbnail: ${citation}.png`);
  }
});

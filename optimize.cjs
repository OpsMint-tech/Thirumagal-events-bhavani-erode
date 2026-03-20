const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'assets', 'new');

async function optimizeImages() {
    console.log(`Scanning directory: ${dir}`);
    const files = fs.readdirSync(dir);
    
    let originalSize = 0;
    let newSize = 0;

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
            originalSize += stat.size;
            
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const webpPath = path.join(dir, `${baseName}.webp`);
            
            try {
                console.log(`Optimizing: ${file}... (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
                const image = sharp(filePath);
                const metadata = await image.metadata();
                
                let processor = image;
                if (metadata.width > 1200) {
                    processor = processor.resize(1200);
                }
                
                await processor
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                
                const newStat = fs.statSync(webpPath);
                newSize += newStat.size;
                console.log(` -> Created ${baseName}.webp (${(newStat.size / 1024 / 1024).toFixed(2)} MB)`);
                
                // Remove original to save space
                fs.unlinkSync(filePath);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
    
    console.log('--- Optimization Complete ---');
    console.log(`Original total size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`New total size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Saved: ${((originalSize - newSize) / 1024 / 1024).toFixed(2)} MB!`);
}

optimizeImages();

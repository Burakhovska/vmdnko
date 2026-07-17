const fs = require('fs');
const path = require('path');

// Load products.js
const productsContent = fs.readFileSync('js/products.js', 'utf8');
eval(productsContent);

// Collect all image paths from products
const imagePaths = new Set();

products.forEach(product => {
    if (product.image) {
        imagePaths.add(product.image);
    }
    if (product.modifications) {
        product.modifications.forEach(mod => {
            if (mod.images) {
                mod.images.forEach(img => imagePaths.add(img));
            }
        });
    }
});

// Check if each image exists
const missingImages = [];
const existingImages = [];

imagePaths.forEach(imgPath => {
    const fullPath = path.join('images', imgPath);
    if (fs.existsSync(fullPath)) {
        existingImages.push(imgPath);
    } else {
        missingImages.push(imgPath);
    }
});

console.log('=== EXISTING IMAGES ===');
existingImages.forEach(img => console.log(`✓ ${img}`));

console.log('\n=== MISSING IMAGES ===');
missingImages.forEach(img => console.log(`✗ ${img}`));

console.log(`\nTotal: ${imagePaths.size} images`);
console.log(`Existing: ${existingImages.length}`);
console.log(`Missing: ${missingImages.length}`);

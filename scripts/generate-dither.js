import sharp from 'sharp';

// Generate a 128x128 blue-noise-like dithering texture
const size = 128;
const channels = 3;
const data = Buffer.alloc(size * size * channels);

for (let i = 0; i < size * size; i++) {
  const v = Math.floor(Math.random() * 256);
  data[i * channels] = v;
  data[i * channels + 1] = v;
  data[i * channels + 2] = v;
}

await sharp(data, { raw: { width: size, height: size, channels } })
  .png()
  .toFile('public/LDR_LLL1_0.png');

console.log('Dithering texture created at public/LDR_LLL1_0.png');

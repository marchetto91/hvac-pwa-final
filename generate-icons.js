const sharp = require('sharp');

(async () => {
  try {
    await sharp('./public/logo.png')
      .resize(192, 192)
      .toFile('./public/icon-192x192.png');
    console.log('icon-192x192.png generata');

    await sharp('./public/logo.png')
      .resize(512, 512)
      .toFile('./public/icon-512x512.png');
    console.log('icon-512x512.png generata');

    await sharp('./public/logo.png')
      .resize(512, 512)
      .toFile('./public/apple-touch-icon.png');
    console.log('apple-touch-icon.png generata');
  } catch (err) {
    console.error('Errore durante la generazione:', err);
  }
})();



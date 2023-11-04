import { createCipheriv, randomBytes } from 'crypto';

const strtr = (str: string) => {
  return str.trim().replace(/\//g, '_').replace(/\+/g, '-');
};

const imgHash = (ImageUrl: string) => {
  const encryptionKey = process.env.NEXT_OFFER_IMAGE_ENCRYPTION_KEY ?? '';
  const CRYPTO_IV_LENGTH = 16;
  const nonce = randomBytes(CRYPTO_IV_LENGTH);

  const cipher = createCipheriv(
    'aes-256-cfb',
    Buffer.from(encryptionKey, 'base64'),
    nonce
  );
  const hash = Buffer.concat([cipher.update(ImageUrl), cipher.final()]);
  return strtr(Buffer.concat([nonce, hash]).toString('base64'));
};

export default imgHash;

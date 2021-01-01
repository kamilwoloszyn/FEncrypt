import crypto from 'crypto';

const alghoritm = `aes-256-cbc`;

export const Decrypt = (key: string, buf: string, iv: string): string=> {
  let ivBuf: Buffer = Buffer.from(iv);
  let encryptedData: Buffer = Buffer.from(buf);
  let decipher: crypto.Decipher = crypto.createDecipheriv(alghoritm, Buffer.from(key), ivBuf);
  let decrypted : Buffer = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString('hex');
}

export const Encrypt = (key: string, buf: string): {iv: string, buf: string} => { 
  let iv: Buffer = crypto.randomBytes(16);
  let cipher: crypto.Cipher = crypto.createCipheriv(alghoritm, Buffer.from(key, 'utf-8'), iv)
  let encrypted : Buffer = cipher.update(buf);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { 
    iv: iv.toString('hex'),
    buf : encrypted.toString('hex')
  }
}

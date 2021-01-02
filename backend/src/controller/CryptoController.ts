import crypto from 'crypto';

const alghoritm = `aes-256-cbc`;

export const Decrypt = (key: string, encryptedData: Buffer, iv: string): string=> {
  let ivBuf: Buffer = Buffer.from(iv);
  let decipher: crypto.Decipher = crypto.createDecipheriv(alghoritm, Buffer.from(key), ivBuf);
  let decrypted : Buffer = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString('hex');
}

export const Encrypt = (key: string, buf: Buffer): {iv: string, buf: Buffer} => { 
  let iv: Buffer = crypto.randomBytes(16);
  let cipher: crypto.Cipher = crypto.createCipheriv(alghoritm, Buffer.from(key, 'utf-8'), iv)
  let encrypted : Buffer = cipher.update(buf);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { 
    iv: iv.toString('hex'),
    buf : encrypted
  }
}

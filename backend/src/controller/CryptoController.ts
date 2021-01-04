import crypto from 'crypto';

const alghoritm = `aes-256-cbc`;

export const Decrypt = (key: string, encryptedData: Buffer, ivStr: string): Promise<Buffer> => {
  return new Promise<Buffer>((resolve, reject) => {
    const salt: Buffer= crypto.scryptSync(key, 'salt', 32);
    const iv: Buffer = Buffer.from(ivStr, 'hex');
    const decipher: crypto.Cipher = crypto.createCipheriv(alghoritm, salt, iv);
    let decrypted: Buffer = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    resolve(decrypted);
  })
}
export const Encrypt = (key: string, buf: Buffer): Promise<{ iv: string, buf: Buffer }> => { 
  return new Promise<{ iv: string, buf: Buffer }>((resolve, reject) => {
    const iv: Buffer = crypto.randomBytes(16);
    const salt: Buffer = crypto.scryptSync(key,'salt',32)
    const cipher: crypto.Cipher = crypto.createCipheriv(alghoritm, salt, iv);
    let encrypted: Buffer = cipher.update(buf);
    encrypted = Buffer.concat([encrypted,cipher.final()])
    if (!encrypted) {
      reject(new Error("An error occured during decryption"))
    }
    resolve({iv: iv.toString('hex'),buf: encrypted})
  })
}

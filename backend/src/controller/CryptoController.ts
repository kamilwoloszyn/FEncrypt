import crypto from 'crypto';

const alghoritm = `aes-256-cbc`;

export const Decrypt = (key: string, encryptedData: Buffer, iv: string): Promise<Buffer> => {
  return new Promise<Buffer>((resolve,reject)=> { 
    let ivBuf: Buffer = Buffer.from(iv);
    let hashKey = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
    let decipher: crypto.Decipher = crypto.createDecipheriv(alghoritm, Buffer.from(hashKey), ivBuf);
    let decrypted : Buffer = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    if (!decrypted) {
      reject(new Error("An error occured during decryption"));
    }
    resolve(decrypted);
  })

}

export const Encrypt = (key: string, buf: Buffer): Promise<{ iv: string, buf: Buffer }> => { 
  return new Promise<{ iv: string, buf: Buffer }>((resolve, reject) => {
      let iv: Buffer = crypto.randomBytes(16);
      let hashKey = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
      let cipher: crypto.Cipher = crypto.createCipheriv(alghoritm, Buffer.from(hashKey), iv)
      let encrypted : Buffer = cipher.update(buf);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    if (!encrypted) {
      reject(new Error("An error occured during decryption"))
    }
    resolve({iv: iv.toString('hex'),buf: encrypted})
  })
}

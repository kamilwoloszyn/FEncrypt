import crypto from 'crypto';

const alghoritm = `aes-256-cbc`;

export const Decrypt = (key: string, encryptedData: Buffer, iv: string): Promise<Buffer | Error> => {
  return new Promise<Buffer | Error>((resolve,reject)=> { 
    let ivBuf: Buffer = Buffer.from(iv);
    let decipher: crypto.Decipher = crypto.createDecipheriv(alghoritm, Buffer.from(key), ivBuf);
    let decrypted : Buffer = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    if (!decrypted) {
      reject(new Error("An error occured during decryption"));
    }
    resolve(decrypted);
  })

}

export const Encrypt = (key: string, buf: Buffer): Promise<{ iv: string, buf: Buffer } | Error> => { 
  return new Promise<{ iv: string, buf: Buffer } | Error>((resolve, reject) => {
      let iv: Buffer = crypto.randomBytes(16);
      let cipher: crypto.Cipher = crypto.createCipheriv(alghoritm, Buffer.from(key, 'utf-8'), iv)
      let encrypted : Buffer = cipher.update(buf);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    if (!encrypted) {
      reject(new Error("An error occured during decryption"))
    }
    resolve({iv: iv.toString('hex'),buf: encrypted})
    
  })
}

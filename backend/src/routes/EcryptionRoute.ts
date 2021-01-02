import * as socketio from 'socket.io';
import { Encrypt } from '../controller/CryptoController';

function EncryptionRoute(key: string, buf: Buffer): Promise<{ iv: string, buf: Buffer }> {
  return new Promise<{ iv: string, buf: Buffer }>((resolve, reject) => {
    Encrypt(key, buf).then((data) => {
      resolve({iv: data.iv, buf: data.buf});
    }).catch((err) => {
      reject(err);
    }) 
  })
    

  
}
export default EncryptionRoute;
import * as socketio from 'socket.io';
import { Decrypt } from '../controller/CryptoController';

function DecryptionRoute(key: string, buf: Buffer, iv: string): Promise<Buffer>   {
  return new Promise<Buffer>((resolve, reject) => {
    Decrypt(key, buf, iv).then((file) => {
      resolve(file)
    }).catch((err) => {
      reject(err);
    })
  })
 
}

export default DecryptionRoute;
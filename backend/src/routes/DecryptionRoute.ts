import * as socketio from 'socket.io';
import { Decrypt } from '../controller/CryptoController';

function DecryptionRoute(key: string, buf: Buffer, iv: string): void   {
  const decrypted: string = Decrypt(key, buf, iv);
}

export default DecryptionRoute;
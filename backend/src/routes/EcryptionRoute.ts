import * as socketio from 'socket.io';
import { Encrypt } from '../controller/CryptoController';

function EncryptionRoute(key: string, buf: Buffer): void {
  let encrypted: {iv:string, buf:Buffer} = Encrypt(key,buf) 
}
export default EncryptionRoute;
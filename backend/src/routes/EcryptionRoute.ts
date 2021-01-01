import * as socketio from 'socket.io';
import { Encrypt } from '../controller/CryptoController';

function EncryptionRoute(key: string, buf: string): void {
  let encrypted: {iv:string, buf:string} = Encrypt(key,buf) 
}
export default EncryptionRoute;
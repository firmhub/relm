import { CryptoJS, JsonFormatter } from 'node-cryptojs-aes';

export function password (pass, format = JsonFormatter) {
  return {
    encrypt: str => CryptoJS.AES.encrypt(str, pass, { format }).toString(),
    decrypt: str => CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(str, pass, { format }))
  };
}

import { password } from './services/crypto';
import fs from 'fs';
import ini from 'ini';

// // encrypted -> ini
// const input = fs.readFileSync(`${__dirname}/data.txt`, { encoding: 'utf8' });
// const parsed = ini.encode(JSON.parse(password(process.env.PASSWORD).decrypt(input)));
// fs.writeFileSync(`${__dirname}/data.ini`, parsed, { encoding: 'utf8' });

// ini -> encrypted
const input = fs.readFileSync(`${__dirname}/data.ini`, { encoding: 'utf8' });
const parsed = ini.decode(input);
const encrypted = password(process.env.PASSWORD).encrypt(JSON.stringify(parsed));
const outfile = `${__dirname}/data.txt`;
fs.writeFileSync(outfile, encrypted, { encoding: 'utf8' });
console.log(`Wrote encrypted ${outfile}:`, Object.keys(parsed));

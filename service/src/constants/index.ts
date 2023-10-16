export const SEED_GENERATION_CODE =
`
import * as crypto from 'crypto';
import * as bip39 from 'bip39';

// Assuming we have already imported the RSA private key into crypto.KeyObject:
// const privateKey: crypto.KeyObject = ...

async function generateSeedFromPin(pin: string, privateKey: crypto.KeyObject): Promise<string> {
  // 1. Derive a PBKDF2 string from the user's 6-digit pin input.
  const salt = crypto.randomBytes(16);
  const pbkdf2DerivedKey = crypto.pbkdf2Sync(pin, salt, 10000, 256, 'sha256');

  // 2. Sign the derived PBKDF2 string using the RSA 2048 private key.
  const sign = crypto.createSign('SHA256');
  sign.update(pbkdf2DerivedKey);
  const signature = sign.sign(privateKey);

  // 3. Generate a BIP39 mnemonic seed phrase from the RSA signature.
  // Note: You might need to adjust the length to match the requirements for a valid BIP39 seed.
  const seed = signature.slice(0, 32);  // Use first 32 bytes (256 bits)
  const mnemonic = bip39.entropyToMnemonic(seed.toString('hex'));

  return mnemonic;
}

// Example usage
// const mnemonic = await generateSeedFromPin('123456', privateKey);
// console.log(mnemonic);

`

export const MEMO_TAG_GENERATION =
`
import * as forge from 'node-forge';
import * as fs from 'fs';

// Load the .cer file and convert it into a forge certificate object
function loadPublicKeyFromCerFile(filePath: string): forge.pki.PublicKey {
    const fileContent = fs.readFileSync(filePath, 'binary');
    const certDer = forge.util.decode64(fileContent);
    const certificate = forge.pki.certificateFromAsn1(forge.asn1.fromDer(certDer));

    return certificate.publicKey;
}

// Encrypt a string using the provided public key
function encryptStringWithPublicKey(payload: string, publicKey: forge.pki.PublicKey): string {
    const encrypted = publicKey.encrypt(forge.util.encodeUtf8(payload), 'RSA-OAEP');
    return forge.util.encode64(encrypted);
}

// Example usage
const cerFilePath = './path_to_your.cer';
const publicKey = loadPublicKeyFromCerFile(cerFilePath);
const payload = JSON.stringify(transactionDetailsSignedByRSAkey);
const encryptedPayload = encryptStringWithPublicKey(payload, publicKey);

console.log(\`Encrypted Payload: \${encryptedPayload}\`);

`
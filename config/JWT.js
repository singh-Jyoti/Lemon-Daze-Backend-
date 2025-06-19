import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const secretKey = crypto.randomBytes(64).toString('hex');

export function generateToken(payload) {
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
    return token;
}
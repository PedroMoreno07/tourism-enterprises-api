import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
const SALT_ROUND = 10;
const JWT_SECRET = process.env.JWT_SECRET;

export async function hashed(password) {
  return await bcrypt.hash(password, SALT_ROUND);
}

export async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

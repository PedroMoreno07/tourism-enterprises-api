import { PrismaClient } from "@prisma/client";
import { generateToken, hashed } from "../utils/auth.js";
const prisma = new PrismaClient();
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const hashedPassword = await hashed(password);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });
    const token = generateToken(newUser);
    res.status(201).json({ name: newUser.name, email: newUser.email, token });
  } catch (error) {
    res.status(500).json({
      messagem: "Erro ao registrar o usuário!",
      erro: error.message,
    });
  }
};

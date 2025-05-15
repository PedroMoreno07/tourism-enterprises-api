import { PrismaClient } from "@prisma/client";
import { comparePassword, generateToken, hashed } from "../utils/auth.js";
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

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(401).json({
        message: "Credenciais Inválida!",
      });
    }
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Credenciais Inválida!",
      });
    }
    const token = generateToken(user);
    res.json({
      usuario: { name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao fazer o login!",
    });
  }
};

import { PrismaClient } from "@prisma/client";
import { comparePassword, generateToken, hashed } from "../utils/auth.js";
import { authenticate } from "../middleware/authentication.js";
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
    res.status(201).json({
      name: newUser.name,
      email: newUser.email,
      message: "Registro concluído!",
    });
  } catch (error) {
    res.status(500).json({
      messagem: "Erro ao registrar o usuário!",
      erro: error.message,
    });
  }
};

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await hashed(password);
    const newAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({
      name: newAdmin.name,
      email: newAdmin.email,
      message: "Registro concluído!",
    });
  } catch (error) {
    res.status(500).json({
      messagem: "Erro ao registrar o Admin!",
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

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (user) {
      const userPasswordMatch = await comparePassword(password, user.password);

      const token = generateToken(user);

      if (!userPasswordMatch) {
        return res.status(401).json({
          message: "Credenciais Inválida!",
        });
      }

      res.json({
        usuario: {
          name: user.name,
          email: user.email,
          message: `Bem-Vindo usuário ${user.name}`,
        },
        token,
      });
    } else if (admin) {
      const adminPasswordMatch = await comparePassword(
        password,
        admin.password
      );

      const token = generateToken(admin);

      if (!adminPasswordMatch) {
        return res.status(401).json({
          message: "Credenciais Inválida!",
        });
      }

      res.json({
        usuario: {
          name: admin.name,
          email: admin.email,
          message: `Bem-Vindo administrador ${admin.name}`,
        },
        token,
      });
    } else if (!admin || !user) {
      return res.status(401).json({
        message: "Credenciais Inválida!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erro ao fazer o login!",
      error,
    });
  }
};

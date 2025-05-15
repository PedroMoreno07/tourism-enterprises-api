import { z } from "zod";
export const registerUserSchema = z.object({
  name: z.string().min(2, "Seu nome deve conter 2 digito ou mais!"),
  email: z.string().email("Email Inválido!"),
  phone: z
    .string()
    .length(11, "Seu número deve conter 11 digito!")
    .regex(/^\d+$/, "O telefone deve conter apenas números"),
  password: z
    .string()
    .min(6, "Sua senha deve conter no mínimo 6 caracteres!")
    .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra")
    .regex(
      /[\W_]/,
      "A senha deve conter pelo menos um símbolo (ex: @, #, $, !)"
    ),
});

export const loginUserSchema = z.object({
  email: z.string().email("Email Inválido"),
  password: z.string().min(1, "Campo Obrigatório!"),
});

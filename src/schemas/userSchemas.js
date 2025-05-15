import { z } from "zod";
export const registerUserSchema = z.object({
  name: z.string().min(2, "Seu nome deve ter 2 digito ou mais!"),
  email: z.string().email("Email Inválido!"),
  phone: z.string().length(11, "Seu número deve ter 11 digito!"),
  password: z
    .string()
    .min(6, "Sua senha deve ter no minimo 6 caracteres!")
    .regex(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra")
    .regex(
      /[\W_]/,
      "A senha deve conter pelo menos um símbolo (ex: @, #, $, !)"
    ),
});

import { z } from "zod";

export const placeCreateSchemas = z.object({
  name: z.string(),
  description: z
    .string()
    .min(100, "Sua descrição deve ter no minímo 100 caracteres!"),
  address: z.object({
    logradouro: z.string(),
    numero: z.number(),
    bairro: z.string(),
    complemento: z.string().optional(),
  }),
  type: z.string(),
  rating: z.number().min(0).max(5),
});

import { z } from "zod";

export const placeCreateSchemas = z.object({
  name: z.string(),
  description: z
    .string()
    .max(100, "Sua descrição deve ter no maximo 100 caracteres!"),
  address: z.object({
    logradouro: z.string(),
    numero: z.number(),
    bairro: z.string(),
    complemento: z.string().optional(),
  }),
  type: z.string(),
  rating: z.number().min(0).max(5),
});

export const placeUpdateSchemas = z.object({
  name: z.string().optional(),
  description: z
    .string()
    .max(100, "Sua descrição deve ter no maximo 100 caracteres!")
    .optional(),
  address: z.object({
    logradouro: z.string().optional(),
    numero: z.number().optional(),
    bairro: z.string().optional(),
    complemento: z.string().optional(),
  }),
  type: z.string().optional(),
  rating: z.number().min(0).max(5).optional(),
});

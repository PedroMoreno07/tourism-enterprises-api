import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPlace = async (req, res) => {
  const { name, description, address, type, rating } = req.body;
  try {
    const newPlace = await prisma.place.create({
      data: {
        name,
        description,
        address,
        type: type.toLowerCase(),
        rating,
      },
    });

    res.status(201).json({
      name: newPlace.name,
      type: newPlace.type,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar um local!",
      erro: error.message,
    });
  }
};

export const getAllPlaces = async (req, res) => {
  try {
    const allPlace = await prisma.place.findMany();
    res.status(200).json(allPlace);
  } catch (error) {
    res.status(500).json({
      mensagem: "Locais não encontrado",
      erro: error.message,
    });
  }
};

export const getPlaceByType = async (req, res) => {
  try {
    const { type } = req.params;
    const place = await prisma.place.findFirst({
      where: { type },
    });

    if (!place) {
      return res.status(401).json({ message: "Filtro inexistente!" });
    }
    res.status(200).json({ place });
  } catch (error) {
    res.status(500).json({
      mensagem: "Filtragem não encontrada",
      erro: error.message,
    });
  }
};

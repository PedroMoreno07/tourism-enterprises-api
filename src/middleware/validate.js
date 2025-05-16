export function validate(schema) {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Erro de validação",
        erros: error.errors.map((e) => ({
          path: e.path,
          message: e.message,
        })),
      });
    }
  };
}

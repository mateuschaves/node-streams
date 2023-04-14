import { NextFunction, Request, Response } from "express"

function validateTask(request: Request, response: Response, next: NextFunction) {
  const { title, description } = request.body;
  if (!String(title).trim()) {
    return response.status(400).json({ message: 'Título é um campo obrigatório' });
  }

  if (!String(description).trim()) {
    return response.status(400).json({ message: 'Descrição é um campo obrigatório' });
  }

  next();
}

export default validateTask
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayLoad {
  sub: string
}
export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization
  if (!authHeader)
    return response.status(401).json({ message: 'Token missing' })

  const token = authHeader.split(' ')[1]

  try {
    const { sub } = verify(token, 'chavesecreta') as IPayLoad
    request.id_deliveryman = sub
    return next()
  } catch (err) {
    return response.status(401).json({ message: 'Token invalid! ' })
  }
}

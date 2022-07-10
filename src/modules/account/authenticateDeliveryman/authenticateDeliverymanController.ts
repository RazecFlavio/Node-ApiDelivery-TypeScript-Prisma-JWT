import { Request, Response } from 'express'
import authenticateDeliverymanUseCase from './authenticateDeliverymanUseCase'

class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}
export default new AuthenticateDeliverymanController()

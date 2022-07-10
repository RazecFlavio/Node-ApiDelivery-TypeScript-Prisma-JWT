import { Request, Response } from 'express'
import authenticateClientUseCase from './authenticateClientUseCase'

class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const result = await authenticateClientUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}
export default new AuthenticateClientController()

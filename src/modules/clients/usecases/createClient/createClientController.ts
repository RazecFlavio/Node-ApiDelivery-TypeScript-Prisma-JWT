import { Request, Response } from 'express'
import createClientUseCase from './createClientUseCase'

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const result = await createClientUseCase.execute({ username, password })
    return response.json(result)
  }
}

export default new CreateClientController()

import { Request, Response } from 'express'
import CreateDeliverymanUseCase from './CreateDeliverymanUseCase'

class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const result = await CreateDeliverymanUseCase.execute({
      username,
      password,
    })
    return response.json(result)
  }
}
export default new CreateDeliverymanController()

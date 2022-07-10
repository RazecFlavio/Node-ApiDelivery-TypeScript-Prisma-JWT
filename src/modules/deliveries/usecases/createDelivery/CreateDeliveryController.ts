import { Request, Response } from 'express'
import CreateDeliveryUseCase from './CreateDeliveryUseCase'

class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body
    const { id_client } = request
    const delivery = await CreateDeliveryUseCase.execute({
      id_client,
      item_name,
    })
    return response.json(delivery)
  }
}
export default new CreateDeliveryController()

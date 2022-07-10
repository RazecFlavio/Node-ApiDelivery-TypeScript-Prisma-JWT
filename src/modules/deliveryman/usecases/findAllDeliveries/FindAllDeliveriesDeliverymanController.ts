import { Request, Response } from 'express'
import FindAllDeliveriesDeliverymanUseCase from './FindAllDeliveriesDeliverymanUseCase'

class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const result = await FindAllDeliveriesDeliverymanUseCase.execute(
      id_deliveryman,
    )
    return response.json(result)
  }
}
export default new FindAllDeliveriesDeliverymanController()

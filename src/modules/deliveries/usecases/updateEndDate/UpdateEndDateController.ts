import { Request, Response } from 'express'
import { prisma } from '../../../../database/prismaClient'
import UpdateEndDateUseCase from './UpdateEndDateUseCase'

class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request
    const { id } = request.params

    await UpdateEndDateUseCase.execute({
      id_deliveryman,
      id_delivery: id,
    })
    return response.status(200).send()
  }
}
export default new UpdateDeliverymanController()

import { Request, Response } from 'express'
import FindAllDeliveriesUseCase from './FindAllDeliveriesUseCase'

class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request
    const result = await FindAllDeliveriesUseCase.execute(id_client)
    return response.json(result)
  }
}
export default new FindAllDeliveriesController()

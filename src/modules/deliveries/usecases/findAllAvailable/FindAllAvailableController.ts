import { Request, Response } from 'express'
import FindAllAvailableUseCase from './FindAllAvailableUseCase'

class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const deliveries = await FindAllAvailableUseCase.execute()
    return response.json(deliveries)
  }
}
export default new FindAllAvailableController()

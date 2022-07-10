import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import authenticateClientController from './modules/account/authenticateClient/authenticateClientController'
import authenticateDeliverymanController from './modules/account/authenticateDeliveryman/authenticateDeliverymanController'
import createClientController from './modules/clients/usecases/createClient/createClientController'
import FindAllDeliveriesController from './modules/clients/usecases/deliveries/FindAllDeliveriesController'
import CreateDeliveryController from './modules/deliveries/usecases/createDelivery/CreateDeliveryController'
import FindAllAvailableController from './modules/deliveries/usecases/findAllAvailable/FindAllAvailableController'
import UpdateDeliverymanController from './modules/deliveries/usecases/updateDeliveryman/UpdateDeliverymanController'
import UpdateEndDateController from './modules/deliveries/usecases/updateEndDate/UpdateEndDateController'
import CreateDeliverymanController from './modules/deliveryman/usecases/createDeliveryman/CreateDeliverymanController'
import FindAllDeliveriesDeliverymanController from './modules/deliveryman/usecases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

const routes = Router()

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle,
)
routes.post('/client/', createClientController.handle)
routes.post('/deliveryman', CreateDeliverymanController.handle)

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  CreateDeliveryController.handle,
)

routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  FindAllAvailableController.handle,
)

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  UpdateDeliverymanController.handle,
)

routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  FindAllDeliveriesController.handle,
)

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  FindAllDeliveriesDeliverymanController.handle,
)

routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  UpdateEndDateController.handle,
)
export { routes }

import { Router } from 'express'

import { productsRoutes } from './products.routes'
import { productImagesRoutes } from './productsImages.routes'
import { sessionsRoutes } from './sessions.routes'
import { usersRoutes } from './users.routes'

export const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/sessions', sessionsRoutes)

routes.use('/products/images', productImagesRoutes)
routes.use('/products', productsRoutes)

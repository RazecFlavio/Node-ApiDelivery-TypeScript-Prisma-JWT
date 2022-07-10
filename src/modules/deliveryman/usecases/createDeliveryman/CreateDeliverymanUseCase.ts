import { hash } from 'bcrypt'
import { prisma } from '../../../../database/prismaClient'
interface ICreateDeliveryman {
  username: string
  password: string
}

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const exists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (exists) throw new Error('Delivery Man already exists! ')

    const hashPW = await hash(password, 8)

    const deliveryman = await prisma.deliveryman.create({
      data: { username, password: hashPW },
    })

    return deliveryman
  }
}
export default new CreateDeliverymanUseCase()

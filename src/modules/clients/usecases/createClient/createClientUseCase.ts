import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
  username: string
  password: string
}

class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const exists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (exists) throw new Error('Client already exists! ')

    const hashPW = await hash(password, 8)

    const client = await prisma.clients.create({
      data: { username, password: hashPW },
    })

    return client
  }
}

export default new CreateClientUseCase()

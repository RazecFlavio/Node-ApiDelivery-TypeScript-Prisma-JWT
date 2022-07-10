import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../database/prismaClient'

interface IAuthenticateClient {
  username: string
  password: string
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    })
    if (!client) throw new Error('Username or password invalid! ')

    const pwMatch = await compare(password, client.password)
    if (!pwMatch) throw new Error('Username or password invalid! ')

    const token = sign({ username }, 'chavesecreta', {
      subject: client.id,
      expiresIn: '1d',
    })

    return token
  }
}
export default new AuthenticateClientUseCase()

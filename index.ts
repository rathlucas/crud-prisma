import express, { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.listen(3333, () => console.log('Server listening on http://localhost:3333'))

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()

  return res.status(201).json({ users: users })
})

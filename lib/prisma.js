import { PrismaClient } from './generated/prisma'

const globalForPrisma = global

const db = globalForPrisma.db || 
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.db = db
}

export default db
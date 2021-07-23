import { createConnection, ConnectionOptions, Connection } from 'typeorm'
import { ShortCode } from './entities/shortcode.entity'

export const connect = async(): Promise<Connection> => {
  let options: ConnectionOptions = {
    type: 'postgres',
    username: 'sclrac',
    password: 'sclrac',
    database: 'sclrac',
    logging: 'all',
    logger: 'advanced-console',
    entities: [ShortCode],
    synchronize: true,
  }

  if (process.env.NODE_ENV === 'test') {
    options = {
      type: 'sqlite',
      database: ':memory:',
      logging: 'all',
      logger: 'advanced-console',
      entities: [ShortCode],
      synchronize: true,
    }
  }

  if (process.env.NODE_ENV === 'production') {
    options = {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: ['error'],
      logger: 'simple-console',
      entities: [ShortCode],
      synchronize: true,
    }
  }

  return await createConnection(options)
}

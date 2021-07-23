import { createConnection, ConnectionOptions } from 'typeorm'
import { ShortCode } from './entities/shortcode.entity'

export const connect = async() => {
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

  if (process.env.NODE_ENV === 'production') {
    options = {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: 'all',
      logger: 'advanced-console',
      entities: [ShortCode],
      synchronize: true,
    }
  }

  await createConnection(options)
}

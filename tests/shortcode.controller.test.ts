import { connect } from '../src/db/connect'
import { createRandomShortCode, createSpecificShortCode } from '../src/controllers/shortcode.controller'
import { Connection } from 'typeorm'

describe('test for shortcode controller', () => {
  let connection: Connection
  beforeAll(async() => {
    connection = await connect()
  })

  it('createRandomShortCode works', async() => {
    const shortCode = await createRandomShortCode('https://google.com/search?q=javascript')
    expect(shortCode).toBeDefined()
    expect(shortCode.longUrl).toEqual('https://google.com/search?q=javascript')
  })

  it('createSpecificShortCode works', async() => {
    const shortCode = await createSpecificShortCode('aabbcc', 'https://google.com/search?q=javascript')
    expect(shortCode).toBeDefined()
    expect(shortCode.longUrl).toEqual('https://google.com/search?q=javascript')
    expect(shortCode.shortCode).toEqual('aabbcc')
  })

  afterAll(async() => {
    await connection.close()
  })
})

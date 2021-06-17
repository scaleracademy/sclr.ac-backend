import { getShortCodeRepo, ShortCode } from "../db/entities/shortcode.entity";
import { intToRadix64, radix64toInt } from "../services/radix64";



export async function createRandomShortCode(longUrl: string): Promise<ShortCode> {
    const randomCode = Math.floor(Math.random() * 99999999)
    const shortCode = intToRadix64(randomCode)

    // if the shortcode exists, we will recurse
    if(await getShortCodeDetails(shortCode)) {
        return await createRandomShortCode(longUrl)
    }
    return await createSpecificShortCode(shortCode, longUrl)
}

export async function createSpecificShortCode(shortCode: string, longUrl: string): Promise<ShortCode> {
    const newEntity = new ShortCode()
    newEntity.id = radix64toInt(shortCode) // TODO: check greater than 8 digit invalid
    newEntity.shortCode = shortCode
    newEntity.longUrl = longUrl

    // TODO: check shortcode already exists
    
    const savedEntity = await getShortCodeRepo().save(newEntity)
    return savedEntity

}

export async function getShortCodeDetails(shortCode: string): Promise<ShortCode | undefined> {
    const id = radix64toInt(shortCode)

    const savedEntity = await getShortCodeRepo().findOne(id, {select: ['shortCode', 'longUrl']})
    return savedEntity
}
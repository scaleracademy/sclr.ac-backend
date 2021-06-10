import { getShortCodeRepo, ShortCode } from "../db/entities/shortcode.entity";
import { radix64toInt } from "../services/radix64";



// export async function createRandomShortCode(longUrl: string): Promise<ShortCode> {

// }

export async function createSpecificShortCode(shortCode: string, longUrl: string): Promise<ShortCode> {
    const newEntity = new ShortCode()
    newEntity.id = radix64toInt(shortCode) // TODO: check greater than 8 digit invalid
    newEntity.shortCode = shortCode
    newEntity.longUrl = longUrl
    
    const savedEntity = await getShortCodeRepo().save(newEntity)
    return savedEntity

}

// export async function getShortCodeDetails(shortCode: string): Promise<ShortCode> { }
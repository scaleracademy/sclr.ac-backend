import { Column, Entity, getRepository, PrimaryColumn, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class ShortCode {
    @PrimaryColumn({type: "bigint"})
    id!: number

    @Column({length: "9"})
    shortCode!: string

    @Column({type: "text"})
    longUrl!: string
}

export function getShortCodeRepo(): Repository<ShortCode> {
    return getRepository(ShortCode)
}
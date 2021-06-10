import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShortCode {
    @PrimaryGeneratedColumn({type: "bigint"})
    id!: number

    @Column({length: "9"})
    shortCode!: string

    @Column({type: "text"})
    longUrl!: string
}
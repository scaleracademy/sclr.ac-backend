import {createConnection, Connection} from "typeorm";
import { ShortCode } from "./entities/shortcode.entity";

export const connect = async () => await createConnection({
    type: "postgres",
    username: "sclrac",
    password: "sclrac",
    database: "sclrac",
    logging: "all",
    logger: "advanced-console",
    entities: [ ShortCode ],
    synchronize: true,
    // dropSchema: true, // TODO: never in production, drops tables on restart
});
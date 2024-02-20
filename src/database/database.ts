import { Kysely } from "kysely";
import { DB } from "./dbTypes";

export class Database extends Kysely<DB> {}

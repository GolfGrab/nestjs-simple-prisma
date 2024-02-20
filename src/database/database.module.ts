import { Global, Module } from "@nestjs/common";
import { MssqlDialect } from "kysely";
import * as tarn from "tarn";
import * as tedious from "tedious";
import { Database } from "./database";
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from "./database.module-definition";
import { DatabaseOptions } from "./databaseOptions";
@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const dialect = new MssqlDialect({
          tarn: {
            ...tarn,
            options: {
              min: 0,
              max: 10,
            },
          },
          tedious: {
            ...tedious,
            connectionFactory: () =>
              new tedious.Connection({
                authentication: {
                  options: {
                    password: databaseOptions.password,
                    userName: databaseOptions.user,
                  },
                  type: "default",
                },
                options: {
                  database: databaseOptions.database,
                  port: databaseOptions.port,
                  trustServerCertificate: true,
                },
                server: databaseOptions.host,
              }),
          },
        });
        return new Database({
          dialect,
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}

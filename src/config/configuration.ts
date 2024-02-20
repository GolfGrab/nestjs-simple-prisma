const configuration = {
  host: process.env.DATABASE_HOST ?? "localhost",
  port: parseInt(process.env.DATABASE_PORT ?? "5432", 10),
  user: process.env.DATABASE_USER ?? "user",
  password: process.env.DATABASE_PASSWORD ?? "password",
  database: process.env.DATABASE_NAME ?? "database",
};

export default () => configuration;
export type Configuration = typeof configuration;

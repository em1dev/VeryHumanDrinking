import 'dotenv/config';


export const config = process.env as {
  SECRET: string,
  PORT: string,
  DB_FILE_PATH: string
}

if (!config.SECRET || !config.PORT || !config.DB_FILE_PATH) {
  throw new Error("Missing keys in .env file");
}

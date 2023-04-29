import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const { NODE_ENV, PORT, DB_URI, ORIGIN, JWT_TOKEN, JWT_EXPIRE_TOKEN } = process.env;

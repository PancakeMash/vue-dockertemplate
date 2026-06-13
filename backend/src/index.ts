import express from "express";
import { Request, Response } from "express";

import { middlewareLogging, middlewareErrorHandler } from "./middleware/middlewareLogging.js";
import { respondWithJSON } from "./helperfunctions/respondWithJSON.js";

import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "./config.js";

const env = process.env;
const PORT = env.API_PORT || 3000;
const API_URL = env.API_URL;

const app = express();

app.use(middlewareLogging);
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  respondWithJSON(res, 200, { status: "OK" });
});

//Main Backend Endpoints:


//Helper Endpoints:


app.use(middlewareErrorHandler);


startServer();

async function startServer() {
  await runMigrations();

  app.listen(PORT, () => {
    console.log(`Server is running at ${API_URL}:${PORT}`);
  });
}

async function runMigrations() {
  try {
    const migrationClient = postgres({
      host: config.db.host,
      port: config.db.port,
      username: config.db.user,
      password: config.db.password,
      database: config.db.database,
      max: 1,
    });
    await migrate(drizzle(migrationClient), config.db.migrationConfig);
    console.log("✅ Migrations completed!");
  } catch (error) {
    console.error("❌ Migration failed, retrying in 5 seconds...", error);
    await new Promise(res => setTimeout(res, 5000));
    return runMigrations(); // Recursive retry
  }
}
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";

import * as schema from "./schema.js";
import { config } from "../config.js";

const conn = postgres("postgresql://testuser:testpass@localhost:5432/testname?sslmode=disable");
export const db = drizzle(conn, { schema });

// export const db = drizzle("postgresql://testuser:testpass@localhost:5432/testname?sslmode=disable");
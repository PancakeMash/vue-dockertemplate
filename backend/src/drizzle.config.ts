import { defineConfig } from "drizzle-kit"



export default defineConfig({
  schema: "./src/drizzle/schema.ts", // path to your schema.ts file
  out: "./src/drizzle/migrations", // path to your migrations
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: "postgresql://testuser:testpass@localhost:5432/testname?schema=public",
  },
})
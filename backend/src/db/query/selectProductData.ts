import { db } from "../index.js";
import { products } from "../schema.js";

export async function readProducts() {
    const result = await db.select().from(products)

    return result;
}
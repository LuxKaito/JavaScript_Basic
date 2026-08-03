import "dotenv/config";

import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(process.env.DATABASE_URL || "mysql://root:password@localhost:3306/mydb");

export const prisma = new PrismaClient({ adapter });

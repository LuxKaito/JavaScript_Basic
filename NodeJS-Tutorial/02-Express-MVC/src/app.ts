import "dotenv/config";

import express from "express";
import path from "node:path";
import getConnection from "./config/database.ts";
import webRoutes from "./routes/web.ts";

const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

webRoutes(app);

const startServer = async () => {
    try {
        const connection = await getConnection();
        await connection.end();

        app.listen(PORT, () => {
            console.log(`Server chạy tại http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Kết nối database thất bại:", error);
        process.exit(1);
    }
};

startServer();
import mysql from "mysql2/promise";

const getConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || "localhost",
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_NAME || "nodejs_db",
        });

        await connection.query("SELECT 1");

        console.log("Kết nối MySQL thành công!");

        return connection;
    } catch (error) {
        console.error("Kết nối MySQL thất bại:", error);
        throw error;
    }
};

export default getConnection;

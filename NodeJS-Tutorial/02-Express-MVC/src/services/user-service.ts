import getConnection from "../config/database.ts";

const handleCreateUser = async (
    name: string,
    email: string,
    address: string,
) => {
    const connection = await getConnection();
    try {
        const sql =
            "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
        const values = [name, email, address];
        const [result] = await connection.execute(sql, values);
        return result;
    } catch (error) {
        console.error("Error creating user:", error);
    } finally {
        await connection.end();
    }
};

const getAllUsers = async () => {
    const connection = await getConnection();

    // A simple SELECT query
    try {
        const [results, fields] = await connection.query(
            "SELECT * FROM `users`",
        );

        return results;
    } catch (err) {
        console.log(err);
        return [];
    } finally {
        await connection.end();
    }
};

const handleDeleteUser = async (id: number) => {
    const connection = await getConnection();
    try {
        const sql = "DELETE FROM `users` WHERE `id` = ?";
        const values = [id];

        const [result] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        console.log(err);
        return null;
    } finally {
        await connection.end();
    }
};

const handleUpdateUser = async (
    id: number,
    name: string,
    email: string,
    address: string,
) => {
    const connection = await getConnection();
    try {
        const sql =
            "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
        const values = [name, email, address, id];

        const [result] = await connection.execute(sql, values);

        return result;
    } catch (err) {
        console.log(err);
        return null;
    } finally {
        await connection.end();
    }
};

const getUserById = async (id: number) => {
    const connection = await getConnection();
    try {
        const sql = "SELECT * FROM `users` WHERE `id` = ?";
        const values = [id];
        const [rows] = await connection.execute(sql, values);
        return rows;
    } catch (err) {
        console.log(err);
        return [];
    } finally {
        await connection.end();
    }
};

export {
    getAllUsers,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser,
    getUserById,
};

import getConnection from "../config/database.ts";

import { prisma } from "../lib/prisma.ts";

const handleCreateUser = async (
    name: string,
    email: string,
    address: string,
) => {
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address,
        },
    });

    return newUser;
};

export default handleCreateUser;

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};

const handleDeleteUser = async (id: number) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: id,
        },
    });
    return deleteUser;
};

const handleUpdateUser = async (
    id: number,
    name: string,
    email: string,
    address: string,
) => {
    const updateUser = await prisma.user.update({
        where: { id: id },
        data: { name: name, email: email, address: address },
    });
    return updateUser;
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

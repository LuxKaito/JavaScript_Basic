import type { Request, Response } from "express";
import {
    getAllUsers,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser,
    getUserById,
} from "../services/user-service.ts";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.render("home", {
        users,
    });
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
};

const postCreateUser = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;

    await handleCreateUser(name, email, address);

    return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(Number(id));
    return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = (await getUserById(Number(id))) as any[];
    const user = users[0];

    return res.render("view-user", { user });
};

const getUpdateUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = (await getUserById(Number(id))) as any[];
    const user = users[0];

    return res.render("update-user", { user });
};

const postUpdateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, address } = req.body;

    await handleUpdateUser(Number(id), name, email, address);

    return res.redirect("/");
};

export {
    getHomePage,
    getCreateUserPage,
    postCreateUser,
    postDeleteUser,
    getViewUser,
    getUpdateUserPage,
    postUpdateUser,
};

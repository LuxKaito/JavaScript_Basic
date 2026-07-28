import express, { type Express } from "express";
import {
    getCreateUserPage,
    getHomePage,
    postCreateUser,
    postDeleteUser,
    getViewUser,
    getUpdateUserPage,
    postUpdateUser,
} from "../controllers/user-controller.ts";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    router.post("/handle-create-user", postCreateUser);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/update-user/:id", getUpdateUserPage);
    router.post("/handle-update-user/:id", postUpdateUser);
    router.get("/users/:id", getViewUser);
    app.use("/", router);
};

export default webRoutes;

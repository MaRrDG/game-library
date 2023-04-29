import UsersRoute from "@/modules/users/routes/users.route";
import AuthRoute from "@modules/authentification/routes/authentication.route";

export const endpoints = [new UsersRoute(), new AuthRoute()];

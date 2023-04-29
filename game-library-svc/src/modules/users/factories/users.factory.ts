import UserService from "@modules/users/services/users.service";
import UsersController from "@modules/users/controllers/users.controller";
import UsersRoute from "@modules/users/routes/users.route";

export class UsersFactory {
  public static createUserController(): UsersController {
    return new UsersController();
  }

  public static createUserService(): UserService {
    return new UserService();
  }

  public static createUserRouter(): UsersRoute {
    return new UsersRoute();
  }
}

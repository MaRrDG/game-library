import { Router } from "express";
import UsersController from "@modules/users/controllers/users.controller";
import { checkToken } from "@/common/middlewares/checkToken.middleware";
import { UsersFactory } from "@modules/users/factories/users.factory";

class UsersRoute {
  public router: Router;
  private readonly path = "/users";
  private readonly usersController: UsersController;

  constructor() {
    this.router = Router();
    this.usersController = UsersFactory.createUserController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, checkToken, this.usersController.getAll);
    this.router.get(`${this.path}/:id`, checkToken, this.usersController.getById);
    this.router.put(`${this.path}/:id`, checkToken, this.usersController.put);
    this.router.patch(`${this.path}/:id`, checkToken, this.usersController.patch);
    this.router.delete(`${this.path}/:id`, checkToken, this.usersController.delete);
  }
}

export default UsersRoute;

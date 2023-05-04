import { Router } from "express";
import { AuthFactory } from "@modules/authentification/factories/authentication.factory";
import AuthController from "@modules/authentification/controllers/authentication.controller";

class AuthRoute {
  public router: Router;
  private readonly path = "/auth";
  private readonly authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = AuthFactory.createAuthController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/login`, this.authController.getById);
    this.router.post(`${this.path}/register`, this.authController.post);
  }
}

export default AuthRoute;

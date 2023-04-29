import AuthController from "@modules/authentification/controllers/authentication.controller";
import AuthService from "@modules/authentification/services/authentication.service";
import AuthRoute from "@modules/authentification/routes/authentication.route";

export class AuthFactory {
  public static createAuthController(): AuthController {
    return new AuthController();
  }

  public static createAuthService(): AuthService {
    return new AuthService();
  }

  public static createAuthRouter(): AuthRoute {
    return new AuthRoute();
  }
}

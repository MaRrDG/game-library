import { APIError } from "@/common/errors/APIError";
import UserModel, { User } from "@/modules/users/models/users.model";
import jwt from "jsonwebtoken";
import UserService from "@modules/users/services/users.service";
import { GenericService } from "@/common/interfaces/interface";
import { JWT_EXPIRE_TOKEN, JWT_TOKEN } from "@config";

class AuthService implements GenericService {
  public userModel = UserModel;
  public userService = new UserService();

  private generateToken(data?: object) {
    return jwt.sign(data || {}, JWT_TOKEN, {
      expiresIn: JWT_EXPIRE_TOKEN,
    });
  }

  public async postEntity(requestData): Promise<User> {
    const { data } = requestData;
    const user = new UserModel(data);
    const validation = user.validateSync();

    if (validation?.errors)
      throw new APIError(409, `Bad Request - Missing required fields`);

    await this.userService.isEmailAvailable(data.email);

    const newUser = await this.userModel.create(data);

    // Generate JWT Token
    const token = this.generateToken();

    return { ...newUser._doc, token };
  }

  public async getEntityById(requestData): Promise<User> {
    const { data } = requestData;

    const findUser: User = await this.userModel
      .findOne({
        email: data.email,
        password: data.password,
      })
      .exec();

    if (!findUser) throw new APIError(409, `Email or password is wrong.`);

    // Generate JWT Token
    const token = this.generateToken();

    return { ...findUser._doc, token };
  }
}

export default AuthService;

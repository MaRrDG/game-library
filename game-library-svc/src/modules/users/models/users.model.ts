import { model, Schema, Document } from "mongoose";
import {DocumentResult} from "@/common/interfaces/interface";

export interface User extends DocumentResult<User> {
  _id: string;
  email: string;
  password: string;

  token?: string;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model<User & Document>("User", UserSchema);

export default UserModel;

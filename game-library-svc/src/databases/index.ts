import { DB_URI } from "common/config";

export const dbConnection = {
  url: DB_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

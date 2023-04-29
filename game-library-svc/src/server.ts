import App from "@/app";
import IndexRoute from "@/common/indexes/index.route";
import validateEnv from "@/common/utils/validateEnv";
import { endpoints } from "@/modules";

validateEnv();

const app = new App([new IndexRoute(), ...endpoints]);

app.listen();

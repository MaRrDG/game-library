import App from "@/app";
import validateEnv from "@/common/utils/validateEnv";
import { endpoints } from "@/modules";

validateEnv();

const app = new App(endpoints);

app.listen();

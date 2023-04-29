import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as MobxProvider } from "mobx-react";
import { stores } from "./stores";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MobxProvider {...stores}>
    <App />
  </MobxProvider>,
);

import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { router } from "./routes";
import "./index.css";

const App = () => {
  return (
    <>
      <Suspense fallback={<>Loading..</>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;

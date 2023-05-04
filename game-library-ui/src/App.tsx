import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { router } from "./routes";
import "./index.css";

const App = () => {
  return (
    <div className="bg-[#2E3032]">
      <Suspense fallback={<>Loading..</>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;

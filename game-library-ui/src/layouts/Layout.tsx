import { FC, ReactNode } from "react";
import Header from "./Header";

type TProps = {
  children: ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
  return (
    <div className="w-full h-screen px-64 py-2">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

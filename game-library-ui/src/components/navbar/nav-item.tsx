import { Link } from "react-router-dom";
import { FC } from "react";
import clsx from "clsx";

type TProps = {
  isFirst?: boolean;
  className?: string;
  active?: boolean;
  href: string;
  name: string;
};

const NavItem: FC<TProps> = ({ isFirst, className, href, name, active }) => {
  const activeClass = "bg-[#22A96E] -my-1.5 !h-[4rem] w-[6rem] border-none";
  const commonClass = "flex items-center justify-center text-white";
  const defaultClass =
    "capitalized h-full w-[6rem] border-x-[1px] border-[#343637] hover:-my-1.5 hover:bg-[#22A96E] hover:h-[4rem] hover:border-none";
  const isFirstDefaultClass = "border-none capitalized rounded-tl-lg rounded-bl-lg";

  return (
    <>
      <Link
        className={clsx(
          commonClass,
          defaultClass,
          isFirst && isFirstDefaultClass,
          active && activeClass,
          className,
        )}
        to={href}
      >
        {name}
      </Link>
    </>
  );
};

export default NavItem;

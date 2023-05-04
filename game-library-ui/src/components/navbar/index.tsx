import NavItem from "./nav-item";

const Navbar = () => {
  return (
    <div className="flex h-full py-1.5">
      <NavItem href="/" name="Home" isFirst active />
      <NavItem href="/" name="News" />
      <NavItem href="/" name="Games" />
      <NavItem href="/" name="About us" />
    </div>
  );
};

export default Navbar;

import Navbar from "../components/navbar";

const Header = () => {
  return (
    <div className="p-0 flex w-full h-[4rem] bg-[#1e2121] rounded-lg font-josefin items-center justify-center">
      <Navbar />
      <h1 className="uppercase text-white text-xl mx-auto">Library Games</h1>
      <div className="flex items-center space-x-3 text-[#717274] mr-4">
        <p className="font-ubuntu font-semibold text-sm">MaRr</p>
        <img
          src="/man.jpg"
          alt="Avatar photo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;

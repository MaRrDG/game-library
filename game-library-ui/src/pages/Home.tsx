import Footer from "../layouts/Footer";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#030712] font-sans p-4">
      <div className="h-full flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center space-x-4">
          <img src="/React.png" alt="React Logo" className="w-24" />
          <span className="text-white text-4xl font-bold">+</span>
          <img src="/Tailwind.png" alt="React Logo" className="w-24" />
        </div>

        <div className="mt-5 space-x-2">
          <Button
            onClick={() => {
              console.log("Login");
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              console.log("Register");
            }}
          >
            Register
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

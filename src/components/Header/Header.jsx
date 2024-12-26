import profile from "../../assets/images/profile.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex justify-between text-center items-center p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl text-center font-bold">Knowledge Cafe</h1>
      <img className="w-14 rounded-3xl" src={profile} alt="" />
    </div>
  );
};

export default Header;

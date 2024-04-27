import Image from "next/image";
import Sidebar from "./sidebar";

const WelcomePage = () => {
  return (
    <div className="drawer bg-slate-500 min-h-screen justify-center items-center bg-[url('/bg.jpg')] bg-cover">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-outline btn-success glass"
        >
          开启你的梦幻之旅吧~
        </label>
      </div>
      <Sidebar />
    </div>
  );
};

export default WelcomePage;

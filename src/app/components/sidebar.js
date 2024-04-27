import Image from "next/image";
import Navbar from "./navbar";
import Content from "./content";
import Footer from "./footer";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <section className="w-full min-h-full bg-base-200 text-base-content">
        {/* <Image src="/bg.jpg" alt="" fill={true} /> */}
        <Navbar />
        <Content />
        <Footer />
      </section>
    </div>
  );
};

export default Sidebar;

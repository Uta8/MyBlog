"use client";
import Image from "next/image";
import { useState } from "react";

const Identity = () => {
  const [online, setOnline] = useState(true);
  const changeStatusEvent = () => {
    setOnline(!online);
  };
  const status = online ? "avatar online" : "avatar offline";

  return (
    <div className="card w-60 bg-base-100 shadow-xl mt-5 ml-5 ">
      <figure className="px-10 pt-10">
        <div className={status}>
          <div className="w-24 rounded-full">
            <Image src="/avatar.jpeg" alt="avtar" height={60} width={60} />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Luisa</h2>
        <p>Have a nice day :)</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={changeStatusEvent}>
            {online ? "offline" : "online"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Identity;

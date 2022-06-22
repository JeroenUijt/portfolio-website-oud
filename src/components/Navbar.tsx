import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "Projecten", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex h-16 items-center border-b-2 px-8">
      <div className="flex justify-self-start">
        <img
          className="h-8 w-auto rounded-full sm:block"
          src="/images/pfp.jpeg"
        />
        <p className="ml-4 text-xl font-medium text-gray-700">
          Jeroen Uijtdewilligen
        </p>
      </div>
      <div className="flex flex-grow justify-end">
        {navigation.map((item) => (
          <button
            key={item.name}
            className="mx-2 rounded-md bg-white px-4 py-2 font-medium text-slate-400 hover:bg-blue-400 hover:text-white"
            onClick={() => navigate(item.href)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

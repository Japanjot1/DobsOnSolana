import React from 'react';

interface NavButtonProps {
  name: string; // Define the type of 'name' prop as string
}

const NavButton: React.FC<NavButtonProps> = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-0.5 border-2 bg-transparent border-white uppercase text-white transition duration-200 text-sm shadow-white shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
        {name}
      </button>
    </div>
  );
};

export default NavButton;

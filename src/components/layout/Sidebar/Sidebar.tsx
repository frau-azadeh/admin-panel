import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* آیکون همبرگری برای تبلت و موبایل */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-800 text-white focus:outline-none"
      >
        {/* آیکون همبرگری */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* سایدبار */}
      <nav
        className={`bg-gray-800 text-white fixed h-full p-4 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 lg:w-56`}
      >
        <ul className="space-y-2">
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <span>Agenda</span>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <span>Contabilidad</span>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <span>Informes</span>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
              <span>Documentación</span>
            </div>
          </li>
        </ul>
      </nav>

      {/* لایه‌ی پس‌زمینه برای بستن منوی همبرگری */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
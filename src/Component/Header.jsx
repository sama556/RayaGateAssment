import React from 'react';
import { Menu } from '@headlessui/react';
import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.svg'
import boy from '../assets/girl1.png'
function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="bg-white shadow  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <p className=' font-semibold text-sky-950 ml-2'>RayaGate</p>
            </div>
          
          </div>
          <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
          <div className="relative  sm:flex sm:items-center">
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-slate-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Search"
              value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-blue-700" aria-hidden="true" />
            </div>
          </div>

            </div>
            <div className="flex items-center space-x-4">
              <BellIcon className="w-6 h-6 text-blue-700" aria-hidden="true" />
              <img
                className="h-8 w-8 border-blue-500 border-2  rounded-full"
                src={boy}
                alt="User"
              />
              <p className='text-sky-900 font-normal'>Sama Ahmed</p>
            </div>
            <div className="sm:hidden ml-3">
              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Item 1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`${
                            active ? 'bg-gray-100' : ''
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          Item 2
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

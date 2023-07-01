import { Menu, Transition } from "@headlessui/react";
import React, { useState, Fragment} from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDown, AiFillHeart, AiOutlineUp } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="container flex flex-wrap items-center justify-between mx-auto p-4 font-font01">
      <a href="/." className="flex items-center">
        <img src="./images/new-logo.png" className=" h-14 mr-3" alt="" />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-600 ">MPT</span> */}
      </a>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? <RxCross1 size={20} /> : <FiAlignJustify size={20} />}
      </div>
      <div className="hidden w-full md:block md:w-auto" id="navbar">
        <ul className={"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 "}>
          <li>
            <a href="./" className="block py-2 pl-3 pr-4 text-gray-500 hover:text-cyan-600 rounded md:p-0 " aria-current="page">หน้าแรก</a>
          </li>

          <li className="">
            <Menu as="div" className="relative text-left">
              <div onClick={handleNav}>
                <Menu.Button className="inline-flex rounded-md text-gray-500 hover:text-cyan-600">
                  About
                  {!nav ? 
                    <AiOutlineDown className="ml-2 -mr-1 h-5 w-3 text-gray-600 hover:text-cyan-600"
                    aria-hidden="true" /> 
                    : 
                    <AiOutlineUp
                    className="ml-2 -mr-1 h-5 w-3 text-gray-600 hover:text-cyan-600"
                    aria-hidden="true"
                   />}
                  
                </Menu.Button>
              </div>
              <Transition 
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>

                      {({ active }) => (
                        <a href="about">
                          <button
                            className={`${active ? 'bg-sky-300 text-white ' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            เกี่ยวกับเรา
                          </button>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="personals">
                          <button
                            className={`${active ? 'bg-violet-400 text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Team
                          </button>
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  {/* <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Archive
                        </button>
                      )}
                    </Menu.Item>

                  </div> */}
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li>
            <a href="services" className="block py-2 pl-3 pr-4 text-gray-500 hover:text-cyan-600 rounded md:p-0 ">บริการ</a>
          </li>
          <li>
            <a href="ourwork" className="block py-2 pl-3 pr-4 text-gray-500 hover:text-cyan-600 rounded md:p-0 ">ผลงาน</a>
          </li>
          <li>
            <a href="guild" className="block py-2 pl-3 pr-4 text-gray-500 hover:text-cyan-600 rounded md:p-0 ">กิลด์</a>
          </li>
          <li>
            <Menu as="div" className="relative inline-block text-left">
            <div onClick={handleNav}>
                <Menu.Button className="inline-flex rounded-md text-gray-500 hover:text-cyan-600">
                  ประชาสัมพันธ์
                  {!nav ? 
                    <AiOutlineDown className="ml-2 -mr-1 h-5 w-3 text-gray-600 hover:text-cyan-600"
                    aria-hidden="true" /> 
                    : 
                    <AiOutlineUp
                    className="ml-2 -mr-1 h-5 w-3 text-gray-600 hover:text-cyan-600"
                    aria-hidden="true"
                   />}
                  
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-sky-300 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-sky-400 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li>
            <a href="contact" className="block py-2 pl-3 pr-4 text-gray-500 hover:text-cyan-600 rounded md:p-0 ">ติดต่อ</a>
          </li>
        </ul>
      </div>

      {/* Mobile Nav */}
      <div className={!nav ? 'z-30 fixed left-0 top-0 w-[80%] h-full border-r text-center border-r-gray-800 bg-black opacity-90 text-white ease-in-out duration-300 md:hidden' : 'fixed left-[-100%]'}>
        <a href="/." className="flex items-center p-5">
          <img src="images/new-logo.png" className="h-12 mr-3" alt="Flowbite new-logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">MPT</span> */}
        </a>
        <ul className="px-4 p-6">
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full"><a href="./">หน้าแรก</a> </li>
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full">
            <Menu as="div" className="relative inline-block hover:rounded-full w-full">
              <div >
                <Menu.Button className="inline-flex w-full justify-center items-center ">
                  เกี่ยวกับเรา 
                  
                    <AiOutlineDown
                    className="ml-2 -mr-1 h-5 w-3 text-gray-600 hover:text-violet-100"
                    aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-full right-0 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  {/* <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <AiFillHeart
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                  </div> */}
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full"><a href="services" >Guild</a> </li>
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full"><a href="services" >Services</a> </li>
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full"><a href="contents" >News</a> </li>
          <li className="p-2 hover:bg-cyan-500 hover:rounded-full"><a href="contact" >Contact</a> </li>
        </ul>
      </div>
    </nav>
  )
}




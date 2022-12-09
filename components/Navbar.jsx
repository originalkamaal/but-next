'use client';
import { useState } from 'react';
import { Logo } from './Logo';
import { HiOutlineShoppingBag, HiMenu } from 'react-icons/hi';
import { GiSplitCross } from 'react-icons/gi';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';


export default function Navbar({ }) {


  const [menu, toggleMenu] = useState(false);
  const [subMenu, setSubMenu] = useState('');
  const session = useSession();
  const handleToggleMenu = () => {
    toggleMenu(!menu);
  };


  const links = [
    { title: 'Home', src: '/' },
    { title: 'Services', src: '/services' },
    { title: 'Blog', src: '/blog' },
    { title: 'About Us', src: '/about' },
    { title: 'Contact Us', src: '/contact' },
  ];
  return (
    <div
      className='text-black bg-white sticky top-0 z-40 text-sm opacity-95'
    >
      {/* Mobile Links */}
      <div className="flex space-x-5">
        <ul
          className={`${'text-black bg-white'
            } absolute top-[70px] w-full py-3  lg:hidden flex flex-col items-center justify-center  space-y-5 font-[Outfit] ${menu == true ? 'left-0' : 'hidden'
            }`}
        >
          <li className="flex items-center lg:hidden justify-center">
            <div className="relative text-gray-600">
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button type="submit" className="p-1">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="text"
                name="q"
                className="py-2 w-full text-sm text-white bg-gray-100 rounded-md pr-10 pl-3 focus:outline-none focus:text-gray-900"
                maxLength={256}
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </li>
          {links.map((link, i) => {
            let even = links.legnth - 1 == i ? true : false;
            return (
              <li key={i}>
                <Link className="whitespace-nowrap cursor-pointer" href={link.src}>
                  {link.title}
                </Link>
              </li>
            );
          })}

          {session.data ?
            (<li className='w-full flex flex-col justify-center items-center' onClick={() => {
              subMenu == 'myaccount' ? setSubMenu('') : setSubMenu('myaccount');
              console.log(subMenu);
            }}>
              My Account

              <div className={`${subMenu != 'myaccount' ? 'hidden' : 'flex flex-col'} w-full`}>

                <ul className='flex flex-col items-start w-full px-5 space-y-3 bg-gray-100 py-3 text-sm mt-3'>
                  <li>
                    <Link
                      href={`${session.data ? '/myaccount' : '/login'}`}
                      className="cursor-pointer"
                    >
                      {session.data ? 'My Account' : 'Sign Up/Login'}
                    </Link>
                  </li>
                  <li>Edit Profile</li>
                  <li onClick={signOut}>Logout</li>
                </ul>
              </div>
            </li>
            ) : (
              <li className='w-full flex flex-col justify-center items-center'>
                <Link href="/login">Sign Up/Login</Link>
              </li>
            )
          }
        </ul>
      </div>
      {/* Navbar Container */}
      <div
        className={`hidden lg:flex justify-between h-[70px] px-6 z-100 lg:px-10 items-center w-full relative`}
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">

            <Logo className="" />
          </Link>
        </div>
        {/* Search Articles */}
        <div className="lg:flex items-center hidden justify-center">
          <div className="relative text-gray-600">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button type="submit" className="p-1">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              name="q"
              className="py-2 w-80 text-sm text-white bg-gray-100 rounded-md pr-10 pl-3 focus:outline-none  focus:text-gray-900"
              maxLength={256}
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>
        {/* Links */}
        <div className="flex space-x-5">
          <ul
            className={`${'text-black bg-white'
              } 'z-[-1] lg:z-10 lg:static absolute top-[70px] w-full lg:w-auto py-6 lg:py-0 flex flex-col lg:flex-row items-center justify-center lg:space-x-5 lg:pl-0 space-y-5 lg:space-y-0 font-[Outfit] ${menu == true ? 'left-0' : 'left-[-100%]'
              }`}
          >
            <li className="flex items-center lg:hidden justify-center">
              <div className="relative text-gray-600">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button type="submit" className="p-1">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  name="q"
                  className="py-2 w-80 text-sm text-white bg-gray-100 rounded-md pr-10 pl-3 focus:outline-none  focus:text-gray-900"
                  maxLength={256}
                  placeholder="Search"
                  autoComplete="off"
                />
              </div>
            </li>
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <Link className="whitespace-nowrap cursor-pointer" href={link.src}>
                    {link.title}
                  </Link>
                </li>
              );
            })}

            {session.data ?
              (<li className='group relative'>

                <Link
                  href="/login"
                  className='cursor-pointer z-100'
                >
                  My Account
                </Link>

                <ul className='group-hover:flex hidden absolute pt-5 z-0 top-0 space-x-2 bg-white'>

                  <li className="">
                    <button className="cursor-pointer" onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </li>) : (<li className='w-full flex flex-col justify-center items-center'>
                <Link href="/login">Sign Up/Login</Link>
              </li>)
            }
          </ul>
          {/* Cart*/}
          <div>
            <HiOutlineShoppingBag size={25} />
          </div>
        </div>
      </div>
      <div
        className={`${''
          } flex justify-between h-[70px] justify-center px-6 items-center w-full lg:hidden relative`}
      >
        {/* Toggle Button */}
        <div
          onClick={handleToggleMenu}
          className={`${'bg-white text-black'
            } cursor-pointer`}
        >
          {menu == true ? (
            <GiSplitCross size={25} />
          ) : (
            <HiMenu size={25} />
          )}
        </div>

        <div className="cursor-pointer">
          <Link href='/'>
            <Logo className="w-44" />
          </Link>
        </div>

        <div>
          <HiOutlineShoppingBag size={25} />
        </div>
      </div>
    </div>
  );
}

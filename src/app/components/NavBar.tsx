// Navbar.tsx
'use client'
import React, { useState, useEffect, useRef, useCallback} from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {

 const [isOpen, setIsOpen] = useState(false);

  
  
  const toggleOpenClose = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

 const containerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);
    
    
  return (
    <nav className="bg-neutral-100 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">Salonsia
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleOpenClose}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
                      <ul className="absolute top-[4.5rem] right-2 bg-neutral-100 text-black w-40 py-2 rounded shadow-lg"
                      onClick={toggleOpenClose }>
              <li className="pl-4 py-2">
                <Link href="/products">
                 Products
                </Link>
              </li>
              <li className="pl-4 py-2">
                <Link href="/salons">
                  Salons
                </Link>
              </li>
              <li className="pl-4 py-2">
                <Link href="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/products">
                    Products
            </Link>
          </li>
          <li>
            <Link href="/salons">
              Salons
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

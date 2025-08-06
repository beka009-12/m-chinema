"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { Links } from "@/constant/Links";
import Link from "next/link";
import SearchModal from "@/components/pages/shared/SearchModal";
import { FiSearch } from "react-icons/fi"; // <-- иконка

const Header: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className={scss.Header}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.inner}>
              <div className={scss.logo}>EpicMovies</div>

              <div className={scss.box}>
                <nav className={scss.nav}>
                  {Links.map((item, index) => (
                    <Link key={index} href={item.path} className={scss.a}>
                      {item.title}
                    </Link>
                  ))}
                </nav>

                <div className={scss.container_input}>
                  <FiSearch className={scss.icon} />
                  <input
                    type="text"
                    className={scss.input}
                    placeholder="Search..."
                    readOnly
                    onClick={() => setIsSearchOpen(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      )}
    </>
  );
};

export default Header;

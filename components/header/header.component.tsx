import React, { useEffect, useState } from "react";
import { IHeaderNav } from "./interfaces/index";
import SCheaderMenuComponent from "../header-menu/header-menu.component";
import SCsidebarComponent from "../sidebar/sidebar.component";
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from  "./header.module.scss";
import { prefix } from "../../prefix";

const SCheaderComponent = () => {
  const router = useRouter();
  const [mobileNavWidth, setMobileNavWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navItems: IHeaderNav = {
    id: "1",
    items: [
      // {
      //   id: "2",
      //   title: "Productos",
      //   url: "/products",
      //   items: [
      //     {
      //       id: "22",
      //       title: "Galletas",
      //       url: "/cookies",
      //     },
      //     {
      //       id: "23",
      //       title: "Pasteles",
      //       url: "/cakes",
      //     },
      //     {
      //       id: "24",
      //       title: "Brownies",
      //       url: "/brownies",
      //     },
      //     {
      //       id: "25",
      //       title: "Roles",
      //       url: "/roles",
      //     },
      //   ],
      // },
      {
        id: "3",
        title: "Nosotros",
        url: "/about",
      },
    ],
  };

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const updateSizeWindow = () => {
    setMobileNavWidth( globalThis?.window?.innerWidth);
  };

  useEffect(() => {
    // Fetch NavItems from API
    setMobileNavWidth(window.innerWidth);
    window.addEventListener("resize", updateSizeWindow);
    return () => window.removeEventListener("resize", updateSizeWindow);
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={`${styles['sc-logo']}`} onClick={()=> router.push('/')}>
        <img src={`/assets/logos/SClogo.png`} alt="SCLogo" title="SCLogo" width={'100%'}
              height={'100%'} />
      </div>

      <nav className={`${styles['navigation']}`}>
        {mobileNavWidth <= 750 && (
          <div className={`${styles['container-hamburguer-icon']}`}>
            <img
              className="img-fluid"
              alt="x"
              src={`/assets/icons/hamburguer-icon.png`}
              width={"50px"}
              height={'50px'}
              onClick={() => toggleMobileNav()}
            />
          </div>
        )}
        {mobileNavWidth > 750 && (
          <SCheaderMenuComponent id={navItems.id} items={navItems.items} />
        )}
      </nav>
      <SCsidebarComponent
        isOpen={isOpen}
        navItems={navItems}
        onClose={() => handleCloseSidebar()}
      />
    </header>
  );
};

export default SCheaderComponent;

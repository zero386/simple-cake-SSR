import React, { useState, useEffect } from "react";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IHeaderNav, IHeaderNavItem } from "../header/interfaces/index";
import styles from "./sidebar.module.scss";
import { useRouter } from "next/router";

type SCsidebarProps = {
  isOpen: boolean;
  navItems?: IHeaderNav;
  onClose: () => void;
};

const SCsidebarComponent = ({
  isOpen,
  navItems,
  onClose,
  ...props
}: SCsidebarProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(-1);
  const [activeChildItem, setActiveChildItem] = useState(-1);
  const [toggleItem, setToggleItem] = useState(false);
  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const navigateTo = (url: string) => {
    setShow(false);
    onClose();
    router.push(url);
  };

  const handleClickItem = (item: IHeaderNavItem, index: number) => {
    setToggleItem((toggle) => !toggle);
    setActiveItem(index);
  };

  const updateActiveItem = (url: string) => {
    url = "/" + url;
    const indexItem = navItems?.items.findIndex((item) => item.url === url);
    if (indexItem!== undefined && indexItem !== -1) {
      setActiveItem(indexItem);
      if (navItems?.items[indexItem].items?.length) {
        setToggleItem(true)
      }
      if (router.query.hasOwnProperty('category')) {
        const { category } = router.query;
        const indexChildItem = navItems?.items[indexItem].items?.findIndex((childItem) => childItem.url === '/'+category?.toString());
        if (indexChildItem!== undefined && indexChildItem !== -1) {
          setActiveChildItem(indexChildItem);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
    }
    const url = router.route.split("/")[1];
    updateActiveItem(url);
  }, [isOpen]);

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header className={`${styles["off-canvas-header"]}`}>
        <Offcanvas.Title></Offcanvas.Title>
        <Image
          src={"/assets/icons/x-icon.png"}
          alt="xIcon"
          title="xIcon"
          className={`${styles["x-icon"]}`}
          width={"40px"}
          height={"40px"}
          onClick={handleClose}
        />
      </Offcanvas.Header>
      <Offcanvas.Body className={`${styles["off-canvas-body"]}`}>
        <div className={`${styles["navigation-mobile"]}`}>
          <nav>
            <ul>
              {navItems &&
                navItems.items &&
                navItems.items.map((item, indexItem) => {
                  return (
                    <li
                      key={item.id}
                    >
                      {item.items && item.items.length > 0 && (
                        <a
                          className={`${
                            activeItem === indexItem ? styles.active : ""
                          }`}
                          onClick={() => handleClickItem(item, indexItem)}
                        >
                          {item.title}
                          <span
                            className={`${
                              activeItem === indexItem && toggleItem
                                ? `${styles["chevron-bottom"]}`
                                : `${styles["chevron-right"]}`
                            } ${styles["chevron"]}`}
                          ></span>
                        </a>
                      )}
                      {(!item.items || item.items.length <= 0) && (
                        <a className={`${
                          activeItem === indexItem ? styles.active : ""
                        }`} onClick={() => navigateTo(item.url)}>
                          {item.title}
                        </a>
                      )}

                      {item.items && item.items.length > 0 && (
                        <ul
                          className={`${
                            activeItem === indexItem && toggleItem
                              ? `${styles["show"]}`
                              : ""
                          }`}
                        >
                          {item.items.map((childItem, indexChildItem) => {
                            return (
                              <li key={childItem.id}>
                                <a
                                style={{color: 'red'}}
                                className={`${
                                  activeChildItem === indexChildItem ? styles.active : ""
                                }`}
                                  onClick={() =>
                                    navigateTo(item.url + childItem.url)
                                  }
                                >
                                  {childItem.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
            </ul>
          </nav>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SCsidebarComponent;

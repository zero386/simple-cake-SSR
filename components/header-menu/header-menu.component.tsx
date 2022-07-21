import React, { useEffect, useState } from "react";
import styles from "./header-menu.module.scss";
import { useRouter } from 'next/router';
import { IHeaderNavItem } from "../header/interfaces/index";

type SCheaderMenuProps = {
  id?: string | number;
  items: IHeaderNavItem[];
};

const SCheaderMenuComponent = ({ id, items, ...props }: SCheaderMenuProps) => {
  const router = useRouter();
  const { category } = router.query;
  const [activeItem, setActiveItem] = useState(-1);

  const navigateToChild = (url: string, indexItem: number) => {
    setActiveItem(indexItem);
    router.push(url);
  };

  const navigateToParent = (url: string, item: IHeaderNavItem) => {
    if (!item.items || item.items.length <= 0) {
      router.push(url);
    }
  };

  const updateActiveItem = () => {
    let indexActiveItem = -1;
    items.forEach((item) => {
      if (item.url === "/products" && item.items && item.items.length > 0) {
        indexActiveItem = item.items.findIndex(
          (childItem) => childItem.url === `/${category}`
        );
      }
    });
    if (indexActiveItem !== -1) {
      setActiveItem(indexActiveItem);
    }
  };

  useEffect(() => {
    updateActiveItem();
  }, []);

  return (
    <ul>
      {items.map((item, indexItem) => {
        return (
          <li key={item.id} onClick={() => navigateToParent(item.url, item)}>
            <div className={`${styles['dropdown']}`}>
              <button  className={`${styles['dropbtn']} sc-text`}>{item.title}</button>
              <div className={`${styles['dropdown-content']}`}>
                {item.items?.map((childItem, indexChildItem) => {
                  return (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      className={`${styles['sc-text']} ${
                        activeItem === indexChildItem ? `${styles['active']}` : ""
                      }`}
                      key={childItem.id}
                      onClick={() =>
                        navigateToChild(
                          `${item.url}${childItem.url}`,
                          indexChildItem
                        )
                      }
                    >
                      {childItem.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SCheaderMenuComponent;

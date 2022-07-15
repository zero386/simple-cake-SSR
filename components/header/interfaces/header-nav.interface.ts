import { IHeaderNavItem } from "./header-nav-item.interface";

export interface IHeaderNav {
    id?: string | number;
    items: IHeaderNavItem[];
}

export interface IHeaderNavItem {
    id?: string | number;
    title: string;
    url: string;
    items?: IHeaderNavItem[];
}
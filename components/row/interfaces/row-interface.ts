import { IColumn } from "./column-interface";

export interface IRow {
    name: string;
    columns: IColumn[];
}
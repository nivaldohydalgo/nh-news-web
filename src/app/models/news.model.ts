import { Timestamp } from "rxjs";

export interface News {
    id?: number,
    category: number,
    title: string,
    subtitle: string,
    content: string,
    image: string,
    author: string,
    local: string,
    date: Date,
    is_important: boolean,
    is_active: boolean,
    ts_include: Date,
}

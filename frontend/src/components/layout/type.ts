import {ReactNode} from "react";

interface Page {
    title: string
    route: string
    link_disabled?: boolean
    content?: ReactNode
    pages?: Page[]
}

export type {
    Page
}
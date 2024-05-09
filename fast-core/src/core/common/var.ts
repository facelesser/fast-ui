// import { } from '../base/table/default'


export type Theme = {
    tableTheme: any
}
export const THEME_PREFIX = 'fast-ui'

export const componentClassName = (cname:string) => {
    return THEME_PREFIX + '-' + cname
}
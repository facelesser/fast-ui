// import { } from '../base/table/default'
import { computed, ref, watch, watchEffect } from "vue"
// plugin 
export type Theme = {
    tableTheme: any
}
export const THEME_PREFIX = 'fast-ui'

// 设置组件样式名
export const componentClassName = (cname: string) => {
    return THEME_PREFIX + '-' + cname
}

// 合并本地、主题、自定义
export const merageProp = (baseConfig: Object, themeObj: Object, userProps: Object) => {
    return {
        ...baseConfig ?? {},
        ...themeObj ?? {},
        ...userProps ?? {}
    }

}
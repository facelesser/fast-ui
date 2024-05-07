
import type { PropType } from 'vue'
import type { TableColumnCtx } from 'element-plus'

/**
 * @description 列表项配置
 */
export const column = {
    default: () => [],
    type: Object as PropType<Partial<TableColumnCtx<Object>>[]>
}

/**
 * @description 列表数据
 */
export const data = {
    default: () => [],
    type: Object as PropType<Object[]>,
    require: true
}

/**
 * @description 列表默认配置 as { border, height , ...}
 */
export const config = {
    default: () => { },
    type: Object
}

/**
 * @description 列表唯一Key
 */
export const tableKey = {
    default: '',
    type: String
}

export default {
    column,
    outColumn: column,
    data,
    config,
    tableKey
}


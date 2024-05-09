
import type { PropType } from 'vue'
import type { TableColumnCtx, TableProps } from 'element-plus'
import type { PickProp } from '../../common/type'

type Column = PropType<Partial<TableColumnCtx<Object>>[]>
type Data = PropType<Object[]>
type Config = PropType<Partial<TableProps<Object>>[]>

export interface BaseTableProps {
    // 列表项配置
    column: Column,
    // 指定传入列表项配置
    outColumn?: Column,
    // 列表数据
    data: Data,
    // 列表默认配置
    config: Config,
    // 列表唯一ID
    tableKey: String,
}


export default {
    column: {
        type: Object as PickProp<BaseTableProps, 'column'>,
        default: () => []
    },
    outColumn: {
        type: Object as PickProp<BaseTableProps, 'column'>,
        default: () => []
    },
    data: {
        type: Object as PickProp<BaseTableProps, 'data'>,
        default: () => []
    },
    config: {
        type: Object as PickProp<BaseTableProps, 'config'>,
        default: () => { }
    },
    tableKey: {
        type: String,
        default: ''
    }
}


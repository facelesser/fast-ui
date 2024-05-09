
import type { PropType } from 'vue'
import type { TableColumnCtx, TableProps } from 'element-plus'


type T = any
type TableColumn = Partial<TableColumnCtx<T>>
type TableConfig = Partial<TableProps<T>>
export interface BaseTableProps {
    tableId: String; // 列表唯一ID
    data: T[]; // 列表数据
    columns: TableColumn[]; // 列表项配置
    outColumn?: TableColumn[]; // 指定传入列表项配置
    config: TableConfig; // 列表默认配置
}

// 默认样式
export const defaultConfig = {
    broder: true,
    height: 200
}


export default {
    columns: {
        type: Object as PropType<BaseTableProps['columns']>,
        default: () => []
    },
    outColumn: {
        type: Object as PropType<BaseTableProps['columns']>,
        default: () => []
    },
    data: {
        type: Object as PropType<BaseTableProps['data']>,
        default: () => []
    },
    config: {
        type: Object as PropType<BaseTableProps['config']>,
        default: {}
    },
    tableId: {
        type: String,
        default: ''
    }
}


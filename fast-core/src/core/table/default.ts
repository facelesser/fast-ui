
import type { PropType } from 'vue'
import type { TableColumnCtx } from 'element-plus'

export default {
    data: {
        default: () => [],
        type: Object as PropType<Object[]>,
        require: true
    },
    column: {
        default: () => [],
        type: Object as PropType<TableColumnCtx<Object>[]>
    },
    config: {
        default: () => {},
        type: Object
    },
    tableKey: {
        default: '',
        type: String
    }
}


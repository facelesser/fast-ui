import { defineComponent, inject, watch, ref } from 'vue'
import Props, { defaultConfig, type BaseTableProps } from './default'
import { getSlotDefault } from './utils'
import { THEME_PREFIX, componentClassName, type Theme } from '../../common/var'
import { merageProp } from '../../common/var'
export const C_Name = 'fast-table'
import './index.scss'
// import TableSetting from './setting.vue'

export default defineComponent({
    name: C_Name,
    props: Props,
    setup(props, ctx) {
        // 主题配置
        const theme = inject(THEME_PREFIX) as Theme
        const realProp = ref(merageProp(defaultConfig, theme.tableTheme, props.config))
        watch(() => props.config, () => realProp.value = merageProp(defaultConfig, theme.tableTheme, props.config))
        // 自定义节点
        const columnNodes = [...getSlotDefault(ctx), ...props.outColumn ?? []]
        // 合并 Columns & 自定义节点
        const merageColumn = (columns: BaseTableProps['columns']) => {

            if (!Array.isArray(columns)) {
                throw new Error('请传入正确的columns参数!')
            }
            let arr = []
            for (const item of columns as any[]) {
                if (!item.custom) {
                    arr.push(<el-table-column {...item} />)
                } else {
                    const mixNode = columnNodes.find(i => i.props?.prop === item.prop)
                    if (mixNode) {
                        mixNode.props = { ...item, ...mixNode.props }
                        arr.push(mixNode)
                    }
                }
            }
            return arr
        }

        // 混合后节点
        const tableNode = merageColumn(props.columns)

        return () =>
            <div
                class={componentClassName(C_Name)}
            >
                {/* {showSetting.value && <TableSetting field={props.column}  />} */}
                <el-table {...realProp.value} data={props.data} >
                    {tableNode}
                </el-table>
            </div>
    }
})
import { defineComponent, type VNode, ref } from 'vue'
import Props from './default'
import './index.scss'
import TableSetting from './setting.vue'
import { getSlotDefault } from './utils'
export default defineComponent({
    props: Props,
    setup(props, ctx) {
        // 自定义节点
        const columnNodes = getSlotDefault(ctx) || props.outColumn || []
        // 合并 Column & Custom
        const merageColumn = () => {
            if (!Array.isArray(props.column)) {
                throw new Error('请传入正确的column参数!')
            }
            let arr = []
            for (const item of props.column as any[]) {
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

        // 展示内容
        const tableNode = merageColumn()

        
        // 显示设置图标
        const showSetting = ref(false)
        // 鼠标移入
        // const onMouseenter = (e: MouseEvent) => {
        //     showSetting.value = true
        // }

        // // 鼠标移入
        // const onMouseleave = (e: MouseEvent) => {
        //     showSetting.value = false
        // }

        console.log('table-ctx==>', ctx)

        return () =>
            <div class="fast-ui-table" 
            // onMouseenter={(e) => onMouseenter(e)} 
            // onMouseleave={(e) => onMouseleave(e)} 
            >
                {/* {showSetting.value && <TableSetting field={props.column} table-key={props.tableKey} />} */}
                <el-table {...props.config} data={props.data} column={props.column} >
                    {tableNode}
                </el-table>
            </div>
    }
})
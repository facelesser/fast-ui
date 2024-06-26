
import { defineComponent, ref, h } from "vue";
import { useResizeObserver, useTransition } from '@vueuse/core'

import BaseTable from '../base/table/index'
import BasePage from '../base/page/index'
import { Search } from '@element-plus/icons-vue'

import { getSlotDefault } from '../base/table/utils'
import { componentClassName } from '../common/var'
import tableProps from '../base/table/default'
import './index.scss'
import { ElInput, ElSwitch } from 'element-plus'
const comps = {
    ElInput,
    ElSwitch,
}
export const C_Name = 'fast-search'
export default defineComponent({
    name: C_Name,
    props: {
        columns: tableProps.columns,
        // 搜索字样
        placeholder: { default: '搜索', type: String },
        // 高度gap
        gap: { default: 8, type: Number },
        // 最小高度
        miniHeight: { default: 200, type: Number },
        // 搜索框百分比
        inputWidth: { default: 33, type: Number },
        // 搜索Key
        searchKey: { default: 'key', type: String },
        // 额外参数
        extraParams: { default: () => { }, type: Object },
        // 使用搜索
        noSearch: { default: false, type: Boolean }
    },
    components: { BaseTable, BasePage },
    setup(props, ctx) {
        // slots default
        const node = getSlotDefault(ctx)
        const [ctRef, tbRef, tpRef] = [ref(), ref(), ref()]
        // table calc
        const tHeight = ref(100)
        // table calc <Transition>
        const aHeight = useTransition(tHeight, {
            duration: 350,
            transition: [0.4, 0, 0, 1]
        })

        // outsize resize
        useResizeObserver(ctRef, (entries) => {
            const calcHeight = ctRef.value.clientHeight - (props.noSearch ? 0 : tbRef.value.clientHeight) - tpRef.value.$el.clientHeight - props.gap
            tHeight.value = calcHeight > props.miniHeight ? calcHeight : props.miniHeight

            console.log(tHeight.value)
        })

        // 简易搜索组件配置
        let inputProp = {
            style: {
                width: props.inputWidth + '%',
            },
            placeholder: props.placeholder,
            prefixIcon: Search,
            clearable: true
        } as any
        let inputTypeName = 'ElInput'

        // 搜索逻辑
        const inputVal = ref('')
        const inputChange = () => {
            doSearch()
        }


        // 搜索
        const doSearch = () => {
            const params = {
                ...props.extraParams,
                [props.searchKey]: inputVal.value,
            }
            console.log('触发搜索', params)
        }

        return () =>
            <div ref={ctRef} class={componentClassName(C_Name)}>
                {
                    !props.noSearch &&
                    <div ref={tbRef} class={componentClassName(C_Name) + '-toolbar'}>
                        <el-input {...inputProp} v-model={inputVal.value} onChange={inputChange} />
                    </div>
                }

                <base-table config={{ height: aHeight.value }} outColumn={node} columns={props.columns} data={[]} ></base-table>
                <base-page ref={tpRef} total={500} />
            </div>
    }
})
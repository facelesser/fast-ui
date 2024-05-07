// <!-- <template>
//     <div class="fast-ui-simple-search-input-box" :style="{ 'justify-content': 'end' }">


//         <slot v-if="$slots['custom'] !== undefined" name="custom" :data="{ searchKey }" @change="change1"></slot>

//         <el-input v-else :style="{ width: '40%' }" v-model="searchKey" placeholder="搜索" :prefix-icon="Search" clearable
//             @change="inputChange"></el-input>
//     </div>
//     <!-- <fast-table>
//     <slot />
// </fast-table> -->
//     <FastPage />
// </template>
// <script setup lang="ts">
// import FastTable from '../table/index'
// import FastPage from '../page/index.vue'
// import { ref, defineExpose, computed } from 'vue';
// import { Search } from '@element-plus/icons-vue'

// const props = defineProps({

// })


// const searchKey = ref(true)

// // 搜索变更
// const inputChange = (e: string) => {
// }

// // 暴露方法
// const changeValue = (value: any) => {
//     searchKey.value = value
// }

// defineExpose({ changeValue })

// const change1 = () => {
//     console.log('123431312321')
// }
// </script>

// <style lang="scss">
// .fast-ui-simple-search-input-box {
//     padding: 8px 0;
//     display: flex;
// }
// </style> -->
import { defineComponent, ref } from "vue";
import { useResizeObserver, useTransition } from '@vueuse/core'

import FastTable from '../table/index'
import FastPage from '../page/index'
import { Search } from '@element-plus/icons-vue'

import { getSlotDefault } from '../table/utils'
import { componentClassName } from '../common/var'
import { column as Tcolumn } from '../table/default'
import './index.scss'
export const C_Name = 'fast-search'
export default defineComponent({
    name: C_Name,
    props: {
        column: Tcolumn,
        // 搜索字样
        placeholder: { default: '搜索', type: String },
        // 高度gap
        gap: { default: 8, type: Number },
        // 最小高度
        miniHeight: { default: 200, type: Number },
        // 搜索框百分比
        inputWidth: { default: 33, type: Number }
    },
    components: { FastTable, FastPage },
    setup(props, ctx) {
        const node = getSlotDefault(ctx)
        const [ctRef, tbRef, tpRef] = [ref(), ref(), ref()]
        // 高度
        const tHeight = ref(100)

        // 高度动画版
        const aHeight = useTransition(tHeight, {
            duration: 350,
            transition: [0.4, 0, 0, 1]
        })

        // 监听外部容器变化
        useResizeObserver(ctRef, (entries) => {
            const calcHeight = ctRef.value.clientHeight - tbRef.value.clientHeight - tpRef.value.$el.clientHeight - props.gap
            tHeight.value = calcHeight > props.miniHeight ? calcHeight : props.miniHeight
        })

        return () =>
            <div ref={ctRef} class={componentClassName(C_Name)}>
                <div ref={tbRef} class={componentClassName(C_Name) + '-toolbar'}>
                    <el-input style={{ width: props.inputWidth + '%' }} placeholder={props.placeholder} prefix-icon={Search} clearable />
                </div>
                <fast-table config={{ border: true, height: aHeight.value + 'px' }} outColumn={node} column={props.column} data={[]} ></fast-table>
                <fast-page ref={tpRef} total={500} />
            </div>
    }
})
<template>
    <div :class="componentClassName(C_Name)">
        <el-form v-model="formData" label-position="top">
            <el-row class="render-row" :gutter="8">
                <el-col v-for="i in displayOptions" :key="i.name" class="render-col" :span="24 / colSpan">
                    <el-form-item :prop="i.name" :label-width="i.labelWidth" :label="i.label" class="form_item_reset">
                        <component :is="cname(i)" v-model="formData[i.name]" v-bind="i"></component>
                    </el-form-item>
                </el-col>

                <el-col :span="24 / colSpan" class="render-col">
                    <el-button type="primary" @click="doSearch">查询</el-button>
                    <el-button @click="doReset">重置</el-button>
                    <el-button v-if="option.length > colSpan - 1" type="text" @click="open = !open">
                        {{ open ? '展开' : '收起' }}
                    </el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, computed, defineEmits, defineComponent } from 'vue'
import { componentClassName } from '../../common/var'
const C_Name = 'search'
interface OptionItem {
    name: string
    label: string
    type?: string,
    defaultValue?: any
}
const props = defineProps({
    option: {
        default: []
    },
    colSpan: {
        default: 6
    }
})

const emits = defineEmits(['change'])
// 获取组件名称
const cname = (c: OptionItem) => `item-${c.type ?? 'input'}`
// 表单
const formData = ref({})
// 收起展开
const open = ref(true)
const displayOptions = computed(() => {
    if (open.value) {
        return props.option.filter((i, index) => index < props.colSpan - 1)
    } else {
        return props.option
    }
})
console.log(displayOptions)

// 初始化
const init = () => {
    const obj = {}
    for (let item of props.option) {
        obj[item.name] = item.defaultValue || undefined
    }
    formData.value = obj
}
init()

// 搜索
const doSearch = () => {
    console.log(formData.value)
    emits('change', formData.value)
}

// 重置
const doReset = () => {
    init()
}

watch(
    () => props.formData,
    () => {
        console.log('数据变化了')
    }
)

</script>

<script lang="ts">
// 导入组件
import Components from './index'
export default {
    components: Components
}
</script>
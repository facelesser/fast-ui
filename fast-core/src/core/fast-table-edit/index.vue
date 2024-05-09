<template>
    <div>
        <base-table :data="data" :columns="realcolumn" :outColumn="nodes">
            <el-table-column v-bind="item" v-for="item in defaultColumn" :key="item.prop">
                <template #default="scope">
                    <el-input v-model="scope.row[item.prop]" />
                </template>
            </el-table-column>
            <el-table-column prop="table-tool--edit">
                <template #default="scope">
                    <el-button type="danger" @click="del(scope)">删除</el-button>
                </template>
            </el-table-column>
        </base-table>

        <el-button @click="submit">提交</el-button>
    </div>
</template>
<script setup lang="ts">
// import { column } from '../base/table/default';
import BaseTable from '../base/table/index'
import { defineProps, defineSlots } from 'vue'
import { ElMessage } from 'element-plus'
const props = defineProps({
    columns: {
        default: [],
        type: Array
    },
    data: {
        default: [],
        type: Array
    }
})

// 补充节点
const realcolumn = [...props.columns, {
    prop: 'table-tool--edit',
    label: '操作',
    custom: true,
    align: 'right'
}]

const del = (e) => {
    console.log(e)
}


const slots = defineSlots()
const allNodes = slots?.default?.() || []
let nodes = allNodes.filter(i => {
    const res = props.columns.filter(f => f?.prop === i?.props?.prop).find(q => q.formItem.type !== 'input')
    console.log(res)
    return res ? true : false
})


// console.log('使用自定义节点', nodes)
const defaultColumn = props.columns.filter(i => i?.formItem?.type === 'input')



// 提交
const submit = () => {
    console.log(props.data)
    for (const item of props.columns) {
        if (item.formItem) {
            let res = item.formItem?.test?.(props.data[0], props.data[0][item.prop])
            console.log(res)
            ElMessage({
                showClose: true,
                message: res.message,
                type: 'danger',
            })

        }
    }
}

console.log('使用input的组件', defaultColumn)
</script>
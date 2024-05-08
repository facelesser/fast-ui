<template>
    <div>
        <el-button @click="add">新增</el-button>
        <el-button @click="submit">提交</el-button>

    </div>
    <FastTableEdit ref="editTable" :data="data" :column="column">
        <el-table-column prop="name">
            <template #default="scope">
                <el-input v-model="scope.row.name" placeholder="12345" />
            </template>
        </el-table-column>
    </FastTableEdit>
</template>
<script setup lang="tsx">
import FastTableEdit from '@/core/fast-table-edit/index.vue'
import { ref } from 'vue'
const column = [
    {
        prop: 'name',
        label: '名字',
        required: true,
        custom: true,
        formItem: {
            type: 'input',
            test: (row, value) => {
                console.log(row, value)
                if (value !== 'nihao') {
                    return new Error('请输入你好')
                } else {
                    return true
                }
            }
        }
    },
    {
        prop: 'age',
        label: '年龄',
        required: true,
        custom: true,
        formItem: {
            type: 'input',
            test: (row, value) => {
                if (value !== 'nihao') {
                    return new Error('请输入你好')
                } else {
                    return true
                }
            }
        }
    },
]

const data = ref([
    {
        name: '',
        age: 0,
    }
])

const add = () => {
    data.value.push({ name: 'aaa' })
}
const editTable = ref()

const submit = () => {

}

const del = (e) => {
    console.log(e)
}
</script>
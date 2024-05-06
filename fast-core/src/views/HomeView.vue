<script setup lang="ts">
import FastTable from '@/core/table/index'
import Page from '@/core/page/index.vue'
import FastSearch from '@/core/simple-search-table/index.vue'
import { ref } from 'vue'
interface User {
  id: string
  name: string
  sex: number
  age: number
  city: string
  like: string[]
}

// mock data
const testdata: User[] = [
  {
    id: '00001',
    name: '张三',
    sex: 1,
    age: 16,
    city: 'shanghai',
    like: ['电影', '跑步']
  },
  {
    id: '00002',
    name: '李四',
    sex: 1,
    age: 20,
    city: 'beijing',
    like: ['爬山', '游泳', '旅游']
  },
  {
    id: '00003',
    name: '王五',
    sex: 0,
    age: 33,
    city: 'hangzhou',
    like: ['摄影', '瑜伽']
  }
]

// column
const column = [
  {
    prop: 'name',
    label: '名字',
  },
  {
    prop: 'age',
    label: '年龄',
  },
  {
    prop: 'sex',
    label: '性别',
    custom: true
  },
  {
    prop: 'like',
    label: '爱好',
    custom: true,
    width: 300,
  },
  {
    prop: 'address',
    label: '地址',
    width: 180,
    formatter: (row: User) => {
      return row.city + '...'
    },
    fixed: 'right'
  }
]

const test = ref('')
const searchRef = ref(null)
const change = (e: string) => {
  console.log(123456)
}


</script>

<template>
  <main>
    <fast-table table-key="test-table" :data="testdata" :config="{ border: true, height: 120 }" :column="column">
      <el-table-column prop="sex">
        <template #default="scope">
          <el-tag>{{ scope.row.sex === 1 ? '男' : '女' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="like">
        <template #default="scope">
          <el-tag v-for="item in scope.row.like" style="margin-right: 8px;">{{ item }}</el-tag>
        </template>
      </el-table-column>

    </fast-table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <FastSearch ref="searchRef">
      <template #custom="scope">
        {{ scope }}
        <el-switch v-model="scope.data.searchKey" @change="change" />
      </template>
      <fast-table table-key="test-table" :data="testdata" :column="column">
        <el-table-column prop="sex">
          <template #default="scope">
            <!-- <el-tag>{{ scope.row.sex === 1 ? '男' : '女' }}</el-tag> -->
            <el-input v-model="scope.row.name" placeholder="123456" />
          </template>
        </el-table-column>
      </fast-table>
    </FastSearch>
  </main>
</template>

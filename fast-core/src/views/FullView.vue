<script setup lang="ts">
import FastTableSlim from '@/core/fast-table-slim'
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
const testdata = [
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
    formatter: (row: any) => {
      return row.city + '...'
    },
    fixed: 'right'
  }
]

const height = ref(500)

</script>

<template>
  <h1>全表格</h1>

  <div id="it">
    <span>改变高度</span>
    <input v-model="height" style="width: 100px" />
  </div>
  <div :style="{ height: height + 'px', display: 'flex' }" >
    <div class="page-box">
      <div>
        <fast-table-slim :data="testdata" :columns="column">
          <el-table-column prop="sex">
            <template #default="scope">
              <el-tag>{{ scope.row.sex === 1 ? '男' : '女' }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="like">
            <template #default="scope">
              <el-tag v-for=" item  in  scope.row.like " style="margin-right: 8px;">{{ item }}</el-tag>
            </template>
          </el-table-column>
        </fast-table-slim>

      </div>
    </div>
  </div>


</template>

<style>
#it {
  position: fixed;
  right: 20px;
  top: 20px;
  width: 150px;
}

.page-box {
  /* position: absolute; */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
}
</style>@/core/base/table/index
<script setup lang="ts">
import { ref } from 'vue'
import FastSearch from '@/core/base/search/index.vue'
const option = [
  {
    name: 'username',
    label: '用户名',
  },
  {
    name: 'age',
    label: '年龄',
  },
  {
    name: 'age2',
    label: '年龄',
  },
  {
    name: 'age3',
    label: '年龄',
  },
  {
    name: 'age4',
    label: '年龄',
  },
  {
    name: 'age6',
    label: '年龄',
  },
  {
    name: 'age7',
    label: '年龄',
  }
]



</script>

<template>
  <h1>搜索组件</h1>
  <fast-search :option="option" />
</template>

<style>

</style>
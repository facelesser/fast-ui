<script setup lang="ts">
import { ref } from 'vue'
import FastSearch from '@/core/base/search/index.vue'
const option = [
  {
    name: 'username',
    label: '用户名',
  }
]



</script>

<template>
  <h1>搜索组件</h1>
  <fast-search :option="option" />
</template>

<style>

</style>
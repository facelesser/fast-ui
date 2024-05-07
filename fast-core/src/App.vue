<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/search">搜索组件</RouterLink>
  <br/>
  <RouterLink to="/">简易搜索表格</RouterLink>
  <br/>
  <RouterLink to="/about">基础表格</RouterLink>
  <br/>
  <RouterLink to="/full">全表格</RouterLink>
  <RouterView />
</template>

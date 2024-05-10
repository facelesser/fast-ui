<template>
    <el-button type="primary" @click="doSearch">搜索</el-button>
    <el-button @click="doReset">重置</el-button>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'
const emits = defineEmits(['change'])
const doSearch = () => {
    emits('change', 'search')
}

const doReset = () => {
    emits('change', 'reset')
}
</script>
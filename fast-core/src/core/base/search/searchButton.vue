<template>
    <el-button class="search-button" type="primary" plain @click="doSearch" :icon="Search">搜索</el-button>
    <el-button class="search-button" @click="doReset" :icon="Refresh" title="重置"></el-button>
    <el-button class="search-button" :icon="modelValue ? ArrowDownBold : ArrowUpBold" @click="toogle"
        :title="modelValue ? '更多' : '隐藏'"></el-button>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { ArrowDownBold, ArrowUpBold, Refresh, Search } from '@element-plus/icons-vue'
const props = defineProps({
    modelValue: {
        default: false,
        type: Boolean
    }
})
const emits = defineEmits(['update:modelValue', 'change'])
const doSearch = () => {
    emits('change', 'search')
}

const doReset = () => {
    emits('change', 'reset')
}

const toogle = () => {
    emits('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.search-button {
    padding: 0 8px;
    border-radius: 0;
    margin-left: 0;
}
</style>
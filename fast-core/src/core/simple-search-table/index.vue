<template>
    <div class="fast-ui-simple-search-input-box" :style="{ 'justify-content': 'end' }">

        <slot v-if="$slots['custom'] !== undefined" name="custom" :data="{ searchKey }" @change="change1"></slot>

        <el-input v-else :style="{ width: '40%' }" v-model="searchKey" placeholder="搜索" :prefix-icon="Search" clearable
            @change="inputChange"></el-input>
    </div>

    <slot />
    <FastPage />
</template>
<script setup lang="ts">
import FastTable from '../table/index'
import FastPage from '../page/index.vue'
import { ref, defineExpose, computed } from 'vue';
import { Search } from '@element-plus/icons-vue'

const props = defineProps({

})


const searchKey = ref(true)

// 搜索变更
const inputChange = (e: string) => {
}

// 暴露方法
const changeValue = (value: any) => {
    searchKey.value = value
}

defineExpose({ changeValue })

const change1 = () => {
    console.log('123431312321')
}
</script>

<style lang="scss">
.fast-ui-simple-search-input-box {
    padding: 8px 0;
    display: flex;
}
</style>
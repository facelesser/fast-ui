<template>
    <div class="fast-ui-simple-search-input-box" :style="style">
        <slot v-if="custom"></slot>
        <el-input v-else :style="{ width: props.width }" v-model="text" :placeholder="props.placeholder"
            :prefix-icon="Search" clearable @change="inputChange"></el-input>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, useSlots } from 'vue'
import { Search } from '@element-plus/icons-vue'
const text = ref('')
const props = defineProps({
    // 位置
    align: {
        default: 'end',
        type: String
    },
    // 宽度
    width: {
        default: '40%',
        type: String
    },
    // 占位
    placeholder: {
        default: '搜索',
        type: String
    },
    // 自定义搜索
    custom: {
        default: false,
        type: Boolean
    }
})

const emits = defineEmits(['change'])

const style = computed(() => {
    return {
        'justify-content': props.align
    }
})


const inputChange = (e: string) => {
}

const slots = useSlots()

console.log(slots)

</script>

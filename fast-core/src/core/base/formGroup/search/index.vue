<template>
    <el-input v-bind="input($attrs)" v-model="data"></el-input>
    <!-- <el-date-picker v-model="data" ></el-date-picker> -->
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { input } from '../default/index'
import { useForm } from '../hooks/index'
const emit = defineEmits(['input'])
const props = defineProps(['value'])
const { data } = useForm({ emit, props })
</script>
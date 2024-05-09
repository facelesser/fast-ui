<template>
    <!-- <el-input v-bind="input($attrs)" v-model="data"></el-input> -->
    <el-date-picker v-bind="input($attrs)" v-model="data" type="daterange" />
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { input } from '../config'
import { useForm } from '../hooks/index'
const emit = defineEmits(['input'])
const props = defineProps(['value'])
const { data } = useForm({ emit, props })
</script>
<template>
    <el-tooltip content="设置" placement="left">
        <el-icon className="fast-ui-table-setting" :underline="false" @click="dialogVisible = true">
            <Setting />
        </el-icon>
    </el-tooltip>
    <el-dialog v-model="dialogVisible" title="自定义表格" width="500" align-center :show-close="false"
        :close-on-click-modal="false" :close-on-press-escape="false">
        <el-table :data="data" border>
            <el-table-column prop="fieldLabel" label="字段"></el-table-column>
            <el-table-column prop="visible" label="显示">
                <template #default="scope">
                    <el-switch v-model="scope.row.visible" inline-prompt active-text="显示" inactive-text="隐藏" />
                </template>
            </el-table-column>
        </el-table>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="handleCancel">取消</el-button>
                <el-button type="primary" @click="handleOk">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>
<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
import { ref, defineProps, watch } from 'vue'
const TABLE_SETTING_TREE = 'fast-ui-table-local-setting'
const props = defineProps({
    field: {
        type: Array,
        default: () => []
    },
    tableId: {
        type: String,
        default: ''
    }
})

// 所有配置项
const localSetting = ref({}) as any
const data = ref([]) as any
const dialogVisible = ref(false)

// 获取本地配置项
const getTableSetting = () => {
    if (props.tableId) {
        try {
            const settingStr = localStorage.getItem('TABLE_SETTING_TREE')
            console.log(settingStr)
            if (settingStr) {
                localSetting.value = JSON.parse(settingStr)
                data.value = localSetting.value[props.tableId]

            } else {
                localSetting.value = {}
                data.value = props.field.map((i: any) => {
                    return {
                        fieldKey: i.prop,
                        fieldLabel: i.label,
                        visible: true
                    }
                })
            }
        } catch (error) {
            throw new Error('数据错误')
        }
    }
}


getTableSetting()


const handleCancel = () => {
    dialogVisible.value = false
}


const handleOk = () => {
    localStorage.setItem(TABLE_SETTING_TREE, JSON.stringify(
        {
            ...localSetting.value,
            [props.tableId]: data.value
        }
    ))
    dialogVisible.value = false

}


watch(() => dialogVisible.value, (val) => {
    if (val) {
        getTableSetting()
    }
})






</script>
<style lang="scss">

</style>
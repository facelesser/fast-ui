import { ref, watch } from 'vue'

export function useForm({ emit, props }) {
  const data = ref(props.value)

  watch(
    () => data.value,
    (val) => {
      console.log('项目数据变更', val)
      emit('input', val)
    }
  )

  watch(
    () => props.value,
    (val) => {
      data.value = val
      if (val !== data.value) {
        data.value = val
      }
    }
  )

  return {
    data
  }
}

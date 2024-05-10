// 默认习惯
export const input = (attrs: any) => {
    return {
        clearable: true,
        placeholder: '请输入' + attrs?.label,
        ...attrs
    }
}

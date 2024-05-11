const isElComponent = ['input','input-number','date-picker']
const isItemComponent = ['select', 'text']
// 获取组件名称
export const analysisComponentName = (c:any) => {
    let el = 'el-'
    let it = 'item-'
    if(!c.is) {
        return el + 'input'
    } else if(isElComponent.includes(c.is)) {
        return el + c.is
    } else if(isItemComponent.includes(c.is)) {
        return it + c.is
    } else {
        ''
    }
}
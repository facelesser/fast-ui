import type { SetupContext, VNode } from 'vue'

/**
 * 
 * @param ctx 
 * @returns default VNode
 */
export const getSlotDefault = (ctx: SetupContext) => {
    const vnode = ctx.slots.default?.() as VNode[] || []
    const arr = []
    for (const item of vnode) {
        flatNode(arr, item)
    }
    return arr
}

const flatNode = (arr: VNode[], node: VNode) => {
    if (node?.type?.name === "ElTableColumn") {
        arr.push(node)
    }
    if (Array.isArray(node.children)) {
        for (const item of node.children) {
            flatNode(arr, item)
        }
    }
}
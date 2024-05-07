import type { SetupContext, VNode } from 'vue'

/**
 * 
 * @param ctx 
 * @returns default VNode
 */
export const getSlotDefault = (ctx: SetupContext) => {
    return ctx.slots.default?.() as VNode[]
}
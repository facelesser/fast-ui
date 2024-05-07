import { defineComponent } from "vue";
import { componentClassName } from '../../common/var'
import { defaultSetting } from './default'

export const C_Name = 'fast-pagination'
export default defineComponent({
    name: C_Name,
    props: {
        total: {
            default: 0, type: Number
        }
    },
    setup(props, ctx) {
        return () => <div class={componentClassName(C_Name)}>
            <el-pagination {...defaultSetting} total={props.total} />
        </div>
    },
})
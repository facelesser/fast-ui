import type { App } from 'vue'
// 基础组件
import FastComponents from '../base/index'
import { THEME_PREFIX } from '../common/var'
console.log(FastComponents)

const ThisPlugin = {
    install(app: App, options: any) {
        FastComponents.forEach((c) => {
            app.component(c.name as string, c)
        })
        // 默认配置
        app.provide(THEME_PREFIX, options)
    }
}

export default ThisPlugin
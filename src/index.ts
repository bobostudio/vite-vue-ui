import { createApp } from "vue/dist/vue.esm-bundler.js";
import SmartyUI from './entry'

createApp({
    template: `
        <div>
            <Button color="red" icon="search">红色按钮</Button>
            <Button color="green" icon="edit">绿色按钮</Button>
            <Button color="blue" icon="check">蓝色按钮</Button>
            <Button color="yellow" icon="delete">黄色按钮</Button>
        </div>
    `
}).use(SmartyUI).mount('#root');
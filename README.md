# vite-vue-ui


[![CI](https://github.com/bobostudio/vite-vue-ui/actions/workflows/main.yml/badge.svg)](https://github.com/bobostudio/vite-vue-ui/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/bobostudio/vite-vue-ui/branch/main/graph/badge.svg?token=V1R783ZC8K)](https://codecov.io/gh/bobostudio/vite-vue-ui)
![GitHub](https://img.shields.io/github/license/bobostudio/vite-vue-ui)

## Features

- Vue3 + JSX
- Vite
- Vitepress
- Vitest
- Eslint + Prettier + Husky
- Vercel
- Github Action


## install

`npm i vite-vue-ui`

## Quick Start,可以浏览 [Getting Started](https://vite-vue-ui.vercel.app/)

```vue
import vue from 'vue'
import viteVueUI from 'vite-vue-ui'

const App = {
            template: `
            <Button color="red" icon="search">红色按钮</Button>
            <Button color="blue">主要按钮</Button>
            <Button color="green">绿色按钮</Button>
            <Button color="gray">灰色按钮</Button>
            <Button color="yellow">黄色按钮</Button>
            `
};
createApp(App)
    .component(viteVueUI)
    .mount("#app");
```

## test  router


`/demo/esm/index.html`
`/demo/iffe/index.html`


## UI 

`http://localhost:4000/components`
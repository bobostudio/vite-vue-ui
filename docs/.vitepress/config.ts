const config = {
    themeConfig: {
        sidebar: [
            {
                text: '组件',
                children: [
                    { text: 'Button', link: '/components/button/' },
                ]
            },
        ]
    },
    title: 'Hello SmartyUI',
    description: 'SmartyUI for vue3 add vite.',
    markdown: {
        config: (md) => {
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}

export default config
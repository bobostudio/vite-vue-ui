/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];

export const safelist = [
    ...[
        "search",
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",
    ].map((v) => `i-ic-baseline-${v}`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-700`),
];

export default defineConfig({
    plugins: [vue(), vueJsx({}), Unocss({
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()]
    })],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        },
        minify: 'terser',
        reportCompressedSize: true,
        sourcemap: true,
        lib: {
            entry: './src/entry.ts',
            name: 'SmartyUI',
            fileName: 'smarty-ui',
            formats: ['cjs', 'es', 'umd', 'iife']
        }
    },
    test: {
        globals: true,
        environment: 'happy-dom',
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
})
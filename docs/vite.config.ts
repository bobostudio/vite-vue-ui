import { defineConfig } from "vite";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from "unocss";
import { safelist } from "../vite.config";

export default defineConfig({
    plugins: [
        VueJsx(),
        Unocss({
            safelist,
            presets: [presetUno(), presetAttributify(), presetIcons()]
        }),
    ],
});
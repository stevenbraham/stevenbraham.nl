import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
    plugins: [
        ViteEjsPlugin(),
        purgecss({
            content: ['src/index.html', 'src/**/*.{js,ts,vue,ejs}'],
        }),
    ],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'src/index.html',
        },
    },
});


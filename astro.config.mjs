import { defineConfig } from 'astro/config';

// 1. react をインポートします
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // 2. integrations 配列に react() を追加します
  integrations: [react()],

  // 以前設定したDev Toolbarを無効にする設定
  devToolbar: {
    enabled: false,
  },
});
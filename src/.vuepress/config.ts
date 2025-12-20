import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/dreader-docs/",

  lang: "zh-CN",
  title: "DReader",
  description: "一个基于Flutter实现的跨平台的Epub格式的轻小说阅读软件，支持多端同步阅读进度",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
